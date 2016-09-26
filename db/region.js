var db = require('./_db');

var Region = db.define('region', {
	zip: db.Sequelize.STRING
});

module.exports = Region;
