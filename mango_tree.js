const FruitTree = require('./fruit_tree');
const Mango = require('./mango');

class MangoTree extends FruitTree {
	// Initialize a new MangoTree
	constructor(age, height, matureAge, healthStatus) {
		super(age, height, matureAge, healthStatus);
	}

	grow() {
		super.grow();
	}

	// Produce some mangoes
	produceMangoes() {
		super.produceFruits();
	}

	// Get some fruits
	harvest() {
		super.harvest();
	}
}

module.exports = MangoTree;
