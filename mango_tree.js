const FruitTree = require('./fruit_tree')

class MangoTree extends FruitTree {
    constructor (age = 0, height = 0, fruits = 0, healthStatus = true, harvested = null, matureAge) {
      super(age, height, fruits, healthStatus, harvested, matureAge)
      this.name = 'Mango Tree'
    }
  }

module.exports = MangoTree;