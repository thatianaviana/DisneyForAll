const Apply = require ('../models/Apply');
// const express = require('express');
// const applyRouter = express.Router();


// exports.apply = function(req, res) {
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
  // console.log(`----------------------- nuts ---------------------`)

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

// applyRouter.get('/apply', (req, res) => {
//   Apply.find()
//       // .sort({ date: -1 })
//       .then(apply => res.json(apply))
// });
// applyRouter.post('/apply', (req, res) => {
//   const newApply = new Apply({
//       fullName: req.body.fullName,
//       houseHoldIncome: req.body.houseHoldIncome,
//       aboutFamily: req.body.aboutFamily
//   });
//   newApply.save().then(apply => res.json(apply))
// });
// applyRouter.delete('/:id', (req, res) => {
//   Apply.findById(req.params.id)
//       .then(apply => apply.remove().then(() => res.json({ success: true })))
//       .catch(err => res.status(404).json({ success: false }))
// })
// module.exports = applyRouter;

// const express = require('express');
// const router = express.Router();
// const Item = require('../models/Apply');
// router.get('/apply/here', (req, res) => {
//     Item.find()
//         // .sort({ date: -1 })
//         .then(items => res.json(items))
// });
// router.post('/apply/here', (req, res) => {
//     const newItem = new Item({
//         name: req.body.name
//     });
//     newItem.save().then(item => res.json(item))
// });
// router.delete('/:id', (req, res) => {
//     Item.findById(req.params.id)
//         .then(item => item.remove().then(() => res.json({ success: true })))
//         .catch(err => res.status(404).json({ success: false }))
// })
// module.exports = router;



