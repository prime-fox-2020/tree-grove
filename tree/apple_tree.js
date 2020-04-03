const FruitTree = require('./fruit_tree')
class AppleTree extends FruitTree {
  constructor(age, height, matureAge, healtyStatus) {
      super('Apple Tree', age, height, matureAge, healtyStatus )
  }
}

module.exports = AppleTree