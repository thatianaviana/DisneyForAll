var express = require('express');
var router  = express.Router();

var donate_controller = require('../controllers/donate_controller');
var isAuthenticated = require("../config/middleware/isAuthenticated");


// router.get('/', donate_controller.getStudentData);

router.get('/', donate_controller.getStudentInfo);

module.exports = router;