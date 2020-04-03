const FruitTree = require('./fruit_tree')
const Apple = require('../fruits/apple.js')

class AppleTree extends FruitTree{
    constructor (name, age, height, fruits, healthStatus, harvested ,  limitHeight) {
      super(new Apple, age, height, fruits, healthStatus, harvested ,  limitHeight)
    }
}

module.exports = AppleTree