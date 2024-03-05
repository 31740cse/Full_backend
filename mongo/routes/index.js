var express = require('express');
var router = express.Router();
const userModel = require("./users");
/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index');
});

router.get('/create', async function (req, res) {
  const createduser = await userModel.create({
    username: "Sahu",
    age: 20,
    name: "Ravi"
  });// this is asynchronus code, for make it synch put the "await" keword in front of the line,  
  //and put the keyword "async" infront of the aorent function, this is necesassity
  res.send(createduser);
});




router.get("/allusers", async (req, res) => {
  let allusers = await userModel.find();
  res.send(allusers);
});


router.get("/finduser", async (req, res) => {
  let finduser = await userModel.findOne({ name: "Ravi" });
  res.send(finduser);
});


router.get("/delete", async (req, res) => {
  let deleteduser = await userModel.findOneAndDelete({ name: "Ravi" })
  res.send(deleteduser);
})

module.exports = router;
