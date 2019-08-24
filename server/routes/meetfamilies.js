const express = require('express');
const router = express.Router();

// var authCheck = require("../config/middleware/authCheck");
const meetfamilies_api = require('../apis/meetfamilies_api');

//router.get('/', authCheck, apply_api.index);

router.get('/', meetfamilies_api.findAllFamilies)
// console.log("poop");
// debugger;


module.exports = router;