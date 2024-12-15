const mongoose=require("mongoose");
const { model } = mongoose;
const {userSchema}=require("../schemas/UserSchema");

const  User=new model("user",userSchema);
module.exports = {User};
