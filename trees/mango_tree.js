const FruitTree = require('./fruit_tree.js');
const Mango = require('../fruits/mango.js');

class MangoTree extends FruitTree {
  // Initialize a new MangoTree
  constructor(name, age, height, matureAge, healthStatus) {
    super(name, age, height, matureAge, healthStatus);
  }
  produceMangoes() {
    let limit = Math.floor(Math.random() * 200 + 1);

    for (let i = 0; i <= limit; i++) {
      super.produceFruits(new Mango());
    }
  }
}

module.exports = MangoTree;