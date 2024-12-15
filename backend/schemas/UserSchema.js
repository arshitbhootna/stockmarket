const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Your email address is required"],
    unique: true,
  },
  username: {
    type: String,
    required: [true, "Your username is required"],
  },
  password: {
    type: String,
    required: [true, "Your password is required"],
  },
  holdings: [{ type: mongoose.Schema.Types.ObjectId, ref: 'holding' }], // Updated ref name
  positions: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Position' }],
  orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }]
}, { 
  timestamps: true // Automatically adds `createdAt` and `updatedAt`
});

userSchema.pre("save", async function () {
  if (this.isModified("password")) {
    this.password = await bcrypt.hash(this.password, 12);
  }
});

module.exports = {userSchema};