const FruitTree = require('./fruit_tree.js');
class AppleTree extends FruitTree {
  constructor(age, height, matureAge, healthStatus) {
      super('Apple Tree', age, height, matureAge, healthStatus);
  }
}

module.exports = AppleTree;