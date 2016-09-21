var router = require('express').Router();
var models = require('../db').models;
var SalesPerson = models.SalesPerson;

module.exports = router;

router.get('/', function(req, res, next){
	var salespeople = SalesPerson.findAll()
	.then(function(salespeople){
		res.send(salespeople);
	})
	.catch(next);
});

router.post('/', function(req, res, next){
	SalesPerson.create({name: req.body.name})
	.then(function(salesperson){
		res.send(salesperson);
	})
	.catch(next);
});


router.delete('/:id', function(req, res, next){
	SalesPerson.destroy( {where: {id: req.params.id} } )
	.then(function(){
		res.sendStatus(202);
	})
	.catch(next);
});
