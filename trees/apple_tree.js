const FruitTree = require('./fruit_tree.js');
const Apple = require('../fruits/apple.js');

class AppleTree extends FruitTree {
  // Initialize a new AppleTree
  constructor(name, age, height, matureAge, healthStatus) {
    super(name, age, height, matureAge, healthStatus);
  }
  produceApples() {
    let limit = Math.floor(Math.random() * 200 + 1);

    for (let i = 0; i <= limit; i++) {
      super.produceFruits(new Apple());
    }
  }
}

module.exports = AppleTree;