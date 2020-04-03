const FruitTree = require('./fruit_tree.js')
const Fruit = require('./fruit.js')

class AppleTree extends FruitTree {
  constructor(name,age,height,healthStatus,matureAge,limitYear) {
      super(name,age,height,healthStatus,matureAge,limitYear)
  }
  produceApples() {
      super.produceFruits()
  }
}

  // Get current states here
class Apple extends Fruit {
  constructor(){
      super()
  }
}

module.exports = AppleTree
