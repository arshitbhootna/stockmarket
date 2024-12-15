const mongoose=require("mongoose");
const { model } = mongoose;
const {HoldingSchema}=require("../schemas/HoldingSchema");

const  HoldingModel=new model("holding",HoldingSchema);

module.exports={HoldingModel};