const { data } = require('./dataController');
const express = require("express");
const router = express.Router();
const cors = require("cors");


router.get("/",
// cors({
//     origin: "http://localhost:4201",
//     methods: ["GET", "POST", "PUT", "DELETE"],
//   }), 
data);

module.exports = router;