const FruitTree = require('./fruit_tree').FruitTree
const Fruit = require('./fruit_tree').Fruit

class AppleTree extends FruitTree{
    constructor (typeOfFruit, age, height, matureAge, healthStatus) {
        super(age, height, typeOfFruit, null, null, matureAge, 15, healthStatus, null)
        this._typeOfFruit = 'Apple'
    }
}
  
  
class Apple extends Fruit{
    constructor () {
        super()
    }
}

module.exports = AppleTree