var router = require('express').Router();
var models = require('../db').models;
var Region = models.Region;

module.exports = router;

router.get('/', function(req, res, next){
	var regions = Region.findAll()
	.then(function(regions){
		console.log(regions)
		res.send(regions);
	})
	.catch(next);
});

router.post('/', function(req, res, next){
	Region.create({zip: req.body.zip})
	.then(function(region){
		res.send(region);
	})
	.catch(next);
});

router.delete('/:id', function(req, res, next){
	Region.destroy( {where: {id: req.params.id} } )
	.then(function(){
		res.sendStatus(200);
	})
	.catch(next);
});