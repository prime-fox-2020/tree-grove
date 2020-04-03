const FruitTree = require('./fruit_tree')
class MangoTree extends FruitTree {
  constructor(age, height, matureAge, healtyStatus) {
      super('Mango Tree', age, height, matureAge, healtyStatus )
  }
}

module.exports = MangoTree