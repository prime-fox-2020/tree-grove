const FruitTree = require('./fruit_tree.js');
const Pear = require('../fruits/pear.js');

class PearTree extends FruitTree {
    // Initialize a new PearTree
    constructor(name, age, height, matureAge, healthStatus) {
        super(name, age, height, matureAge, healthStatus);
    }
    producePears() {
        let limit = Math.floor(Math.random() * 200 + 1);

        for (let i = 0; i <= limit; i++) {
            super.produceFruits(new Pear());
        }
    }
}

module.exports = PearTree;