const Apply = require('../models/Apply');

exports.findFamily = function (req, res) {
    console.log(`----------------------- nuts ---------------------`)

    Apply.find({ posted: true }, function (err, dbApply) {

        // check to see if theres already a user with that email

        console.log("Find family who's post is true", dbApply);
        // const newApply = new Apply();
        res.json(dbApply)


    });
};
