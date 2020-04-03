const FruitTree = require('./fruit_tree');
const Apple = require('./apple');

class AppleTree extends FruitTree {
	constructor(age, height, matureAge, healthStatus) {
		super(age, height, matureAge, healthStatus);
	}

	// Get current states here

	// Grow the tree
	grow() {
		super.grow();
	}

	// Produce some mangoes
	produceApples() {
		super.produceFruits();
	}

	// Get some fruits
	harvest() {
		super.harvest();
	}
}

module.exports = AppleTree;
