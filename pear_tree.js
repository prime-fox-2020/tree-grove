const FruitTree = require('./fruit_tree.js');
class PearTree extends FruitTree {
  constructor(age, height, matureAge, healthStatus) {
      super('Pear Tree', age, height, matureAge, healthStatus);
  }
}

module.exports = PearTree;