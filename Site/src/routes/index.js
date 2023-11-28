var express = require("express");
var router = express.Router();
var path = require("path");

router.get("/", function (req, res) {
    res.sendFile(path.join(__dirname, "../../Public/Login.html"));
});

module.exports = router;

// var express = require("express");
// var router = express.Router();

// router.get("/", function (req, res) {
//     res.render("Login");
// });

// module.exports = router;