'use strict';

// app/models/user.js
// load the things we need
var mongoose = require('mongoose');

// define the schema for our user model
var applySchema = mongoose.Schema({

    fullName: {
        type: String,
        min: [1, 'Too few characters'],
        max: 100,
        required: [true, 'Please enter your Full Name.']
    },
    income: {
        type: Number,
        required: [true, 'Please enter your yearly Household Income']
    },
    aboutFamily: {
        type: String,
        required: [true, 'Please tell us about your family']
    },

});

// create the model for users and expose it to our app
module.exports = mongoose.model('Apply', applySchema);