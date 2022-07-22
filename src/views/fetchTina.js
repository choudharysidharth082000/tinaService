const express = require("express");
const router = express.Router();
const {findData} = require("../controllers/fetchTina");
router.put("/findData", findData);
module.exports = router;