const express = require('express');
const router  = express.Router();

const apply_api = require('../apis/apply_api');
// var authCheck = require("../config/middleware/authCheck");

//router.get('/', authCheck, apply_api.index);

router.post('/apply', apply_api.createApply);
// console.log("poop");
// debugger;


module.exports = router;


// api/apply/new