const FruitTree = require('./fruit_tree')
const Pear = require('../fruits/pear')

class PearTree extends FruitTree{
    constructor (name, age, height, fruits, healthStatus, harvested ,  limitHeight) {
      super(new Pear, age, height, fruits, healthStatus, harvested ,  limitHeight)
    }
}

module.exports = PearTree