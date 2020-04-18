const Fruit = require('./fruit');

class Mango extends Fruit{
	constructor(age, height, matureAge, healthStatus) {
		super(age, height,  healthStatus, matureAge, 15)
	}

}

module.exports = Mango;
