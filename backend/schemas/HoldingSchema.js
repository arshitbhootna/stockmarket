const mongoose=require("mongoose");
const { Schema } = mongoose;

const HoldingSchema = new Schema({
    name: {
        type:String,required:true},
    qty: {
        type:Number,required:true},
    avg: {
        type:Number,required:true},
    price: {
        type:Number,required:true},
    net: {
        type:String,required:true},
    day: {
        type:String,required:true},
    user: { 
        type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true
    }
});
module.exports={HoldingSchema};