const Fruit = require('./fruit');

class Pear extends Fruit{
	constructor() {
		super()
	}
	random() {
		super.random()
	}
}

module.exports = Pear;
