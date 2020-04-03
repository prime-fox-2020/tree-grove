const FruitTree = require('./fruit_tree')
class PearTree extends FruitTree {
  constructor(age, height, matureAge, healtyStatus) {
      super('Pear Tree', age, height, matureAge, healtyStatus )
  }
}

module.exports = PearTree