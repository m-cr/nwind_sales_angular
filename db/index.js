var Sequelize = require('sequelize');
var db = new Sequelize(process.env.DATABASE_URL, {
	logging: false
});

var SalesPerson = db.define('salesperson', {
	name: Sequelize.STRING
},{});

var Region = db.define('region', {
	zip: Sequelize.STRING
});

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