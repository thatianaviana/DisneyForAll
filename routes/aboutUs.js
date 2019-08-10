var express = require('express');
var router  = express.Router();

var aboutUs_controller = require('../controllers/aboutUs_controller');
var isAuthenticated = require("../config/middleware/isAuthenticated");


router.get('/', aboutUs_controller.index);

router.post('/new', isAuthenticated, aboutUs_controller.createTrip);

module.exports = router;