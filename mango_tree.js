const FruitTree = require('./fruit_tree');
const Mango = require('./mango');

class MangoTree extends FruitTree {
	// Initialize a new MangoTree
	constructor(age, height, matureAge, healthStatus) {
		super(age, height, matureAge, healthStatus);
	}
	
	produceFruits() {
		if (this._cek === true) {
			let acak = Math.round(Math.random() * 16);
			for (var i = 0; i < acak; i++) {
				this._fruits.push(new Mango());
			}
		}
	}
	
}

module.exports = MangoTree;
