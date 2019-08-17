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
  console.log("createApply", req.body);
  var newApply = new Apply(req.body);

  newApply.save().then(function(dbPost) {
    res.json(dbPost);
  });
};