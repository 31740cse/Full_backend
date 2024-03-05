var express = require('express');
var router = express.Router();
const userModel = require("./users")
/* GET home page. */
router.get('/', function (req, res) {
  res.render('index');
});

router.get("/create", async function (req, res) {
  let userdata = await userModel.create({
    username: "Harsi",
    nickname: "Harshii",
    descri: "i am second girl",
    categories: ['js', 'node', 'fashion', 'life']
  })
  res.send(userdata);
})


router.get("/find", async (req, res) => {
  // case insensitive match with username with the help of regular expression
  //this comprasion not matched exactly, it find for a substring in username
  // var regex = new RegExp("Harsi", 'i');//i is flag which means insensitive


  //for exact match  ^word$    <-----format this is exact match
  //^ denotes the start with and $ denotes end with

  var regex = new RegExp("^Harsi$", 'i'); //this will give exact match
  let user_array = await userModel.find({ username: regex })//this give array
  let user_single = await userModel.findOne({ username: regex })//this give single insteaf of array
  let user_array_with_fashion = await userModel.find({ categories: { $all: ['fashion'] } }) //this give array

  res.send(user_single);
})
module.exports = router;
