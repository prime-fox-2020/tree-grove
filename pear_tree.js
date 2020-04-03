const FruitTree = require('./fruit_tree.js')
const Fruit = require('./fruit.js')

class PearTree extends FruitTree {
  constructor(name,age,height,healthStatus,matureAge,limitYear) {
      super(name,age,height,healthStatus,matureAge,limitYear)
  }
  producePears() {
      super.produceFruits()
  }
}

  // Get current states here
class Pear extends Fruit {
  constructor(){
      super()
  }
}

module.exports = PearTree