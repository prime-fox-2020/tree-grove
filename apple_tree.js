const FruitTree = require('./fruit_tree');
const Apple = require('./apple');

class AppleTree extends FruitTree {
	constructor(age, height, matureAge, healthStatus) {
		super(age, height, matureAge, healthStatus);
	}

	// Get current states here

	produceFruits() {
		if (this._cek === true) {
			let acak = Math.round(Math.random() * 16);
			for (var i = 0; i < acak; i++) {
				this._fruits.push(new Apple());
			}
		}
	}
}

module.exports = AppleTree;
