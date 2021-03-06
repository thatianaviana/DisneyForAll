const express = require('express');
const router = express.Router();

// var authCheck = require("../config/middleware/authCheck");
const admin_api = require('../apis/admin_api');

//router.get('/', authCheck, apply_api.index);

router.get('/', admin_api.findAllFamilies);
// console.log("poop");
router.post('/update/:id', admin_api.postFamily);
router.delete('/:id', admin_api.deleteFamily)

// debugger;


module.exports = router;