var db = require('./_db');
var SalesPerson = require('./salesPerson');
var Region = require('./region');


var sync = function(){
	return db.sync({force: true});
};

var seed = function(){
	return SalesPerson.destroy( {where: {} } )
	.then(function(){
		return Region.destroy( {where: {} } );
	})
	.then(function(){
		return Promise.all([
			SalesPerson.create({name: 'Person1'}),
			SalesPerson.create({name: 'Person2'}),
			SalesPerson.create({name: 'Person3'}),
			Region.create({zip:'10001'}),
			Region.create({zip:'10002'}),
			Region.create({zip:'10003'})
		]);
	});
};

module.exports = {
	seed: seed,
	sync: sync,
	models: {
		SalesPerson: SalesPerson,
		Region: Region
	}
};
