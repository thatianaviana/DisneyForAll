const Apply = require ('../models/Apply');


// exports.index = function(req, res) {
// 	Apply
//   .find()
//   .where('UserId').equals(req.user.id)
//   .then(function(dbTrip) {
//     res.render('trips/trips', {
// 		  layout: 'main-trips',
// 		  trip: dbTrip
// 	  });
//   });
// };
exports.createApply = function(req, res) {

  Apply.findOne({'fullName' : req.body.fullName}, function (err, apply){

    // check to see if theres already a user with that email
  
  console.log("createApply", req.body);
  const newApply = new Apply();

  newApply.fullName = req.body.fullName;
  newApply.houseHoldIncome = req.body.houseHoldIncome;
  newApply.aboutFamily = req.body.aboutFamily;

  newApply.save()
          .then(function() {
          res.send({ success: true });
        }).catch(function(err) {
          res.json(err);
        });

  });
};