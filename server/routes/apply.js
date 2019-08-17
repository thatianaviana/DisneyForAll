var express = require('express');
var router  = express.Router();

var apply_api = require('../apis/apply_api.js');
var authCheck = require("../config/middleware/authCheck");

//router.get('/', authCheck, apply_api.index);

router.post('/apply/new', authCheck, apply_api.createApply);

module.exports = router;


// api/apply/new