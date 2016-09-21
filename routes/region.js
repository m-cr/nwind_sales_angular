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
	.then(function(){
		res.sendStatus(202);
	})
	.catch(next);
});

router.delete('/:id', function(req, res, next){
	Region.delete( {where: {id: req.params.id} } )
	.then(function(){
		res.sendStatus(202);
	})
	.catch(next);
});