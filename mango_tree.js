const FruitTree = require('./fruit_tree.js');
class MangoTree extends FruitTree {
  constructor(age, height, matureAge, healthStatus) {
      super('Mango Tree', age, height, matureAge, healthStatus);
  }
}

module.exports = MangoTree;