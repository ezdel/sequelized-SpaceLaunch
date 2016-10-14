var express = require('express');
var router = express.Router();
var models = require('../models');


router.get('/', function (req, res) {
	res.redirect('/spaceships');
});

router.get('/spaceships', function (req, res) {
	models.Spaceship.findAll({})
	.then(function(spaceships) {
		console.log(spaceships);
		res.render('index', {
      	spaceships: passengers
    	});
	});
});

router.post('/spaceships/create', function (req, res) {
	models.Spaceship.create({
		passengers: req.body.passengers
		})
		.then(function() {
		res.redirect('/spaceships');
	});
});

router.put('/spaceships/update/:id', function (req, res) {
	models.Spaceship.update({ 
		launched: req.body.launched 
		},
		{ 
		where: { id: req.params.id }
	})
	.then(function(result){
		res.redirect('/spaceships');
	}, function(rejectedPromiseError){
	});
});

router.delete('/spaceships/delete/:id', function (req, res) {
	var condition = 'id = ' + req.params.id;

	models.Spaceship.destroy({ 
		launched: req.body.launched 
		},
		{ 
		where: { id: req.params.id }
	})
	.then(function() {
		res.redirect('/spaceships');
	});
});

module.exports = router;