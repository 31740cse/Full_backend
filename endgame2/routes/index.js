var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res) {
  res.render('index');
});


router.get("/failed", (req, res) => {
  req.flash("age", 12)
  req.flash('name', "ravi")
  res.send("setted");
})
//by this method we can use data age from one router to 
//another router using the flash, otherwise there is no any other
//method by which we can use the data of one route to anotehr
//route
router.get("/check_flash", (req, res) => {
  res.send({ "age": req.flash("age"), "name": req.flash("name") });
})
module.exports = router;
