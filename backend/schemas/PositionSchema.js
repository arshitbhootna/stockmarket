const mongoose = require('mongoose');
const {Schema} = mongoose;

// Define the schema for a Position
const positionSchema = new Schema({
    product: { type: String, required: true },
    name: { type: String, required: true },
    qty: { type: Number, required: true },
    avg: { type: Number, required: true },
    price: { type: Number, required: true },
    net: { type: String, required: true }, // "+0.58%" as a string
    day: { type: String, required: true }, // "-1.24%" as a string
    isLoss: { type: Boolean, required: true },
    user: { 
        type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true
       },
}, {
    timestamps: true // Automatically creates `createdAt` and `updatedAt` fields
});

// Export the schema
module.exports = {positionSchema};
