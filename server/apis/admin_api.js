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

exports.postFamily = function (req, res) {
  console.log(`----------------------- nuts ---------------------`)
  console.log('this is the family id ', req.params.id);
  Apply.findById(req.params.id, function (err, apply) {
    apply.posted = !apply.posted;
    apply.save()
      .then(apply => {
        res.json('family post updated!' + apply.posted);
      })
      .catch(err => {
        res.status(400).send("Update not possible");
      });
  });
}
