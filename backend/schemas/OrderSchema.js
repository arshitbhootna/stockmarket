 const mongoose = require('mongoose');
// const {Schema} = mongoose;

// // Define the schema for an Order
// const orderSchema = new Schema({
//     time: { type: String, required: true }, // Storing time as a string for simplicity
//     type: { type: String, required: true }, // "BUY" or "SELL"
//     instrument: { type: String, required: true }, // E.g., "PNB NSE", "USDINR 23MAY FUT CDS"
//     product: { type: String, required: true }, // E.g., "CO", "NRML", "MIS", "CNC"
//     qty: { type: String, required: true }, // E.g., "0 / 1", "1 / 2"
//     ltp: { type: Number, required: true }, // Last Traded Price
//     price: { type: String, required: true }, // E.g., "49.50 / 48.50 trg."
//     status: { type: String, required: true } // E.g., "OPEN"
// }, {
//     timestamps: true // Automatically creates `createdAt` and `updatedAt` fields
// });

// // Export the schema
// module.exports = {orderSchema};
const { Schema } = require("mongoose");

const OrdersSchema = new Schema({
  name: String,
  qty: Number,
  price: Number,
  mode: String,
  time: {
    type: Date,
    default: Date.now, // Automatically sets the current date and time
  },
  user: { 
    type: Schema.Types.ObjectId, ref: 'user', required: true
   },
});

module.exports = { OrdersSchema };