const express = require("express");
const router = express.Router();
const {findData} = require("../controllers/fetchTina");
router.post("/findData", findData);
module.exports = router;