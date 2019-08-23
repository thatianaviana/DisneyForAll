const express = require('express');
const router  = express.Router();

// var authCheck = require("../config/middleware/authCheck");
const admin_api = require('../apis/admin_api');

//router.get('/', authCheck, apply_api.index);

router.get('/', admin_api.findAllFamilies);
// console.log("poop");
// debugger;


module.exports = router;