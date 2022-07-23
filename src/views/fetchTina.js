const express = require("express");
const router = express.Router();
const {findData, test} = require("../controllers/fetchTina");
router.post("/findData", test);
module.exports = router;