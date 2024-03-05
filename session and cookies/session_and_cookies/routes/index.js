var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });



router.get("/", (req, res) => {
  res.send("Welcome");
});



//session
router.get("/putsessionban", function (req, res) {
  req.session.banned = true;
  res.render("index");
});


router.get("/checksessionban", function (req, res) {
  // console.log(req.session);
  if (req.session.banned === true)
    res.send("you are banned")
  else
    res.send("You are not banned");
});


router.get("/deletesession", function (req, res) {
  req.session.destroy(function (err) {
    if (err) throw Error;
    res.send("ban removed");
  })
});
//cookies

router.get("/set_cookie", (req, res) => {
  res.cookie("age", 20);
  res.send("cookie set");
});

router.get("/read_cookie", (req, res) => {
  console.log(req.cookies.age);
  res.send("check the console for the cookies info")
});


router.get("/delete_cookie", (req, res) => {
  res.clearCookie("age");
  res.send("cookie cleared");
});
module.exports = router;
