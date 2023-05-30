const express = require("express");
const router = express.Router();

const controller = require("../controllers/user.controller");

// router.get("/", (req, res) => {
//   res.send("something something dark side");
// });

router.get("/", controller.get);

module.exports = router;
