//install mongoosejs
//require and setup connection
//make schema
//create model and export

const mongoose = require("mongoose");


//connection
mongoose.connect("mongodb://127.0.0.1:27017/my_db");

//schema

const userschema = mongoose.Schema({
  username: String,
  name: String,
  age: Number
})

module.exports = mongoose.model("users", userschema);


