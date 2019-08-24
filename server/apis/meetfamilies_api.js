const Apply = require('../models/Apply');

exports.findAllFamilies = function (req, res) {
    console.log(`----------------------- nuts ---------------------`)

    Apply.find({}, function (err, dbApply) {

        // check to see if theres already a user with that email

        console.log("Find All", dbApply);
        // const newApply = new Apply();
        res.json(dbApply)


    });
};
