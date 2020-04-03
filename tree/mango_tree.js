const FruitTree = require('./fruit_treejs')
const Mango = require('../fruits/mango.js')

class MangoTree extends FruitTree{
    constructor (name, age, height, fruits, healthStatus, harvested , limitHeight) {
      super(new Mango, age, height, fruits, healthStatus, harvested , limitHeight)
    }
}

module.exports = MangoTree