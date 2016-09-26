var db = require('./_db');
var SalesPerson = db.define('salesperson', {
	name: db.Sequelize.STRING
},{});

module.exports = SalesPerson;
