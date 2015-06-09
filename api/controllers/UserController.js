/**
 * UserController
 *
 * @description :: Server-side logic for managing Users
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  edit: function(req, res, next) {
		User.findOne(req.param('id'), function foundUser(err, user) {
			if(err) return next(err);
			if(!user) return next();
			// if successful, display the user profile page (show.ejs), passing in user data
			res.view({
				user: user
			});
		});
	},

	create: function(req, res, next) {
    var params = req.params.all();
		// create user with params
		User.create(params, function userCreated(err, user) {
			// if error, redirect user back to create user page and log error
			if(err) {
				console.log(err);
				req.session.flash = {
					err: err
				}

				return res.redirect('/');
			}

			// if successful
			// log user in
			req.session.authenticated = true;
			req.session.User = user;

			// redirect to user's profile page
			res.redirect('/user/show/' + user.id);
		});
	},

	show: function(req, res, next) {
		User.findOne(req.param('id'), function foundUser(err, user) {
			if(err) return next(err);
			if(!user) return next();
			// if successful, display the user profile page (show.ejs), passing in user data
			res.view({
				user: user
			});
		});
	},

};
