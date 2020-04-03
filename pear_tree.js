const FruitTree = require('./fruit_tree').FruitTree
const Fruit = require('./fruit_tree').Fruit

class PearTree extends FruitTree{
    constructor (typeOfFruit, age, height, matureAge, healthStatus) {
        super(age, height, typeOfFruit, null, null, matureAge, 20, healthStatus, null)
        this._typeOfFruit = 'Pear'
    }
}
  
  
class Pear extends Fruit{
    constructor () {
        super()
    }
}

module.exports = PearTree