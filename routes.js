module.exports = function(app){

		var application = require('./routes/application');//login page
		var data = require('./routes/data');//dashboard
		var users = require('./routes/users');//handles login functions
		var aboutUs = require('./routes/aboutUs');//about Us
		var donate = require('./routes/donate');//donate
		var meetFamilies = require('./routes/meetFamilies');//meetFamilies
		
		

		app.use('/', application);
		app.use('/data', data);
		app.use('/users', users);
		app.use('/aboutUs', aboutUs);
		app.use('/donate', donate);
		app.use('/meetFamilies', meetFamilies);
		

    //other routes..
}