const FruitTree = require('./fruit_tree')
const Pear = require('./pear')

class PearTree extends FruitTree{
	// Initialize a new PearTree
	constructor(age, height, matureAge, healthStatus) {
		super(age, height,  matureAge, healthStatus);
	}

	// Get current states here

	// Grow the tree
	produceFruits() {
		if (this._cek === true) {
			let acak = Math.round(Math.random() * 16);
			for (var i = 0; i < acak; i++) {
				this._fruits.push(new Pear());
			}
		}
	}
}

module.exports = PearTree;