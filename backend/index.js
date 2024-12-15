require("dotenv").config();
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");

const { HoldingModel } = require('./models/HoldingModel');
const { PositionModel } = require('./models/PositionModel');
const {OrderModel}=require('./models/OrderModel');
const { Signup, Login } = require("./Controllers/AuthController");
const { userVerification } = require("./Middlewares/AuthMiddleware");
const {User} = require('./models/Users');  // Import the User model

const profile=require("./Controllers/Profile");

const app = express();
const PORT = process.env.PORT || 3000;
const url = process.env.MONGO_URL;

app.use(express.json());
app.use(cors({
    origin: ["http://localhost:5173", "http://localhost:5174"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
}));
app.use(cookieParser());

// Routes
app.get("/allHoldings", async (req, res) => {
    try {
      const user=req.query.user;
        let allHoldings = await HoldingModel.find({user:user});
        res.json(allHoldings);
    } catch (err) {
        res.status(500).send(err);
    }
});
app.get('/allHoldings/:stockSymbol', async (req, res) => {
    try {
        const stockSymbol = req.params.stockSymbol;
        const holding = await HoldingModel.findOne({ name: stockSymbol });

        if (holding) {
            res.status(200).json(holding);
        } else {
            res.status(404).json({ message: 'Stock not found' });
        }
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

app.get("/allPositions", async (req, res) => {
    try {
      const user=req.query.user;
        let allPositions = await PositionModel.find({user:user});
        res.json(allPositions);
    } catch (err) {
        res.status(500).send(err);
    }
});

app.post("/signup", Signup);
app.post('/login', Login);
app.post('/', userVerification);

// New /user-details route
app.get('/user-details', userVerification, async (req, res) => {
    try {
        const user = await User.findById(req.user, 'username email');
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }
        res.json({ user });
    } catch (error) {
        res.status(500).json({ message: 'Error fetching user details' });
    }
});

app.post("/newOrder", async (req, res) => {
    let newOrder = new OrderModel({
      name: req.body.name,
      qty: req.body.qty,
      price: req.body.price,
      mode: req.body.mode,
      user:req.body.user
    });
    
  
    newOrder.save();
    console.log(req.body.user);
    await User.findByIdAndUpdate(req.body.user, {
      $addToSet: { orders: newOrder._id } // Add order ID to user's orders array
    });
  
    res.send("Order saved!");
});

  app.get("/allOrders", async (req, res) => {
    try {
      const user=req.query.user;
      console.log(`All orders : ${user}`);
        let allOrders = await OrderModel.find({user:user});
        res.json(allOrders);
    } catch (err) {
        res.status(500).send(err);
    }
});

//BUY_STOCk
// Endpoint to buy stock
app.post('/buyStock', async (req, res) => {
  const { stockSymbol, quantity, price,user } = req.body;

  try {
    // Find existing holding
    const holding = await HoldingModel.findOne({ name: stockSymbol , user: user});
    // Find existing position
    const position = await PositionModel.findOne({ name: stockSymbol, user: user });

    if (holding) {
      // Update existing holding
      const totalQty = holding.qty + quantity;
      const totalValue = (holding.avg * holding.qty) + (price * quantity);
      const newAvg = totalValue / totalQty;
      const newNet = totalQty * newAvg;

      holding.qty = totalQty;
      holding.avg = newAvg;
      holding.net = calculatePercentNetChange(holding.price,price); // Ensure it's a string as per your schema
      holding.day =calculateDayChange(holding.price, price); // Update to current date

      await holding.save();

      // Update or create position
      if (position) {
        position.qty = totalQty;
        position.avg = newAvg;
        position.price = price;
        position.net = newNet.toString();
        position.day = calculateDayChange(position.price, price); // Custom function to calculate daily change
        position.isLoss = price < newAvg;
        await position.save();
        await User.findByIdAndUpdate(user, {
          $addToSet: {
            holdings: holding._id, // Add holding ID to user's holdings array
            positions:  position._id  // Add position ID to user's positions array
          }
        });
      } else {
        const newPosition = new PositionModel({
          product: stockSymbol,
          name: stockSymbol,
          qty: totalQty,
          avg: newAvg,
          price: price,
          net: newNet.toString(),
          day: calculateDayChange(price, price), // Assuming first purchase as reference
          isLoss: false, // Assuming no loss on first purchase
          user:user
        });

        await newPosition.save();
        await User.findByIdAndUpdate(user, {
          $addToSet: {
            holdings: holding._id, // Add holding ID to user's holdings array
            positions:  newPosition._id // Add position ID to user's positions array
          }
        });

      }

     

      res.status(200).json({ holding, position });
    } else {
      // Create a new holding if it doesn't exist
      const newHolding = new HoldingModel({
        name: stockSymbol,
        qty: quantity,
        avg: price,
        price,
        net: (quantity * price).toString(),
        day: new Date().toISOString(),
        user:user
      });

      await newHolding.save();

      // Create a new position
      const newPosition = new PositionModel({
        product: stockSymbol,
        name: stockSymbol,
        qty: quantity,
        avg: price,
        price,
        net: (quantity * price).toString(),
        day: "0%", // No change as it's the first purchase
        isLoss: false,
        user:user
      });

      await newPosition.save();
      await User.findByIdAndUpdate(user, {
        $addToSet: {
          holdings: newHolding._id, // Add holding ID to user's holdings array
          positions:  newPosition._id // Add position ID to user's positions array
        }
      });
      console.log("User updated with holdings and positions");
      res.status(200).json({ holding: newHolding, position: newPosition });
    }
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Custom function to calculate daily change (day)
function calculateDayChange(oldPrice, newPrice) {
  const change = ((newPrice - oldPrice) / oldPrice) * 100;
  return `${change.toFixed(2)}%`;
}


  //SELL_STOCK
  // Endpoint to sell stock
  app.post('/sellStock', async (req, res) => {
    const { stockSymbol, quantity, user } = req.body;
  
    try {
      // Find existing holding and position
      const holding = await HoldingModel.findOne({ name: stockSymbol, user: user });
      const position = await PositionModel.findOne({ name: stockSymbol, user: user });
  
      if (holding && holding.qty >= quantity) {
        // Reduce the quantity in the holding
        holding.qty -= quantity;
  
        // Update the net and day change in the holding
        holding.net = calculatePercentNetChange(holding.price, holding.price); // Placeholder for correct logic
        holding.day = calculateDayChange(holding.price, holding.price); // Placeholder for correct logic
  
        await holding.save();
  
        if (position) {
          // Reduce the quantity in the position
          position.qty -= quantity;
  
          // Update the net and day change in the position
          position.net = (position.qty * position.avg).toString();
          position.day = calculateDayChange(position.price, position.price); // Placeholder for correct logic
          position.isLoss = position.price < position.avg;
  
          await position.save();
  
          // Remove holding and position if quantity reaches zero
          if (holding.qty === 0) {
            await HoldingModel.deleteOne({ name: stockSymbol, user: user });
            await PositionModel.deleteOne({ name: stockSymbol, user: user });
            
            // Remove holding and position from user schema
            await User.findByIdAndUpdate(user, {
              $pull: {
                holdings: holding._id,
                positions: position._id
              }
            });
          }
  
          res.status(200).json({ holding, position });
        } else {
          res.status(400).json({ message: 'Position not found for this stock' });
        }
      } else {
        res.status(400).json({ message: 'Not enough quantity to sell or stock not found' });
      }
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  });

// Custom function to calculate daily change (day)
// function calculateDayChange(oldPrice, newPrice) {
//     const change = ((newPrice - oldPrice) / oldPrice) * 100;
//     return ${change.toFixed(2)}%;
// }

function calculatePercentNetChange(previousClosePrice, currentPrice) {
  const percentChange = ((currentPrice - previousClosePrice) / previousClosePrice) * 100;
  return` ${percentChange.toFixed(2)}%`; // Returns the percentage net change as a string
}

app.use("/user", profile);
app.get('/user/aggregatedData/:userid', async (req, res) => {
  const userId = req.params.userid; // Assuming user ID is available in req.user

  try {
    // Find user and populate holdings and positions with IDs
    const user = await User.findById(userId).populate('holdings positions');
    
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Extract holdings and positions IDs from the user
    const holdingIds = user.holdings;
    const positionIds = user.positions;

    // Fetch holdings and positions details using IDs
    const holdings = await HoldingModel.find({ _id: { $in: holdingIds } });
    const positions = await PositionModel.find({ _id: { $in: positionIds } });

    // Aggregate data for holdings
    const holdingsData = holdings.map(holding => ({
      label: holding.name,
      value: holding.qty * holding.avg // or another value you want to visualize
    }));

    // Aggregate data for positions
    const positionsData = positions.map(position => ({
      label: position.name,
      value: position.qty * position.avg // or another value you want to visualize
    }));

    res.json({ holdingsData, positionsData });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});




  



app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    mongoose.connect(url)
        .then(() => console.log("MongoDB is connected successfully"))
        .catch((err) => console.error("MongoDB connection error:", err));
});