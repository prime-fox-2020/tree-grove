const FruitTree = require('./fruit_tree').FruitTree
const Fruit = require('./fruit_tree').Fruit

class MangoTree extends FruitTree{
    constructor (typeOfFruit, age, height, matureAge, healthStatus) {
        super(age, height, typeOfFruit, null, null, matureAge, 20, healthStatus, null)
        this._typeOfFruit = 'Mango'
    }
}
  
  
class Mango extends Fruit{
    constructor () {
        super()
    }
}

module.exports = MangoTree