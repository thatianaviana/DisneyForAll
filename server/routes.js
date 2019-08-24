module.exports = function (app) {
	// Our model controllers (rather than routes)
	const users = require('./routes/users');
	const apply = require('./routes/apply');
	const admin = require('./routes/admin');
	const meetfamilies = require('./routes/meetfamilies')
	// const trips = require('./routes/trips');

	const authCheckMiddleware = require('./config/middleware/authCheck');
	// app.use('/apis/trips', authCheckMiddleware);

	// app.use('/apis/pricing', authCheckMiddleware);

	app.use('/apis/users', users);
	app.use('/apis/apply', apply);
	app.use('/apis/admin', admin);
	app.use('/apis/meetfamilies', meetfamilies);
	// app.use('/apis/trips', trips);
	//other routes..
}