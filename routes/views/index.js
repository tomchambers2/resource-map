var keystone = require('keystone');
var async = require('async');
var Location = keystone.list('Location');
var Category = keystone.list('Category');

exports = module.exports = function (req, res) {

	var view = new keystone.View(req, res);
	var locals = res.locals;

	var query = {};

	view.on('init', function(next) {
		Category.model.find({}).exec(function(err, categories) {
			if (err) return next(err);
			locals.categories = categories;
			next();
		});
	});

	view.on('init', function(next) {
		if (req.params.slug) {
			Category.model.findOne({ slug: req.params.slug }).exec(function(err, result) {
				query = { category: result._id }
				next();
			});
		} else {
			next();
		}
	});

	view.on('init', function(next) {
		Location.model.find(query).populate('category').exec(function(err, locations) {
			if (err) return next(err);

			function improveLocation(location, key, callback) {
				location._.location.googleLookup('GB', false, function(err, location, result) {
					locations[key].googleLocation = result;
					callback();
				});
			}

			async.series([
				function(cb) {
					async.forEachOf(locations, improveLocation, function(err) {
						cb(err);
					})
				},
			], function(err) {
				locals.locations = locations;
				locals.locationsString = JSON.stringify(locations);
				next(err);
			});

		});
	});

	view.render('index');
};
