const FruitTree = require('./fruit_tree.js')
const Fruit = require('./fruit.js')

class AppleTree extends FruitTree {
  constructor(age,height,healthStatus,mature) {
      super(age,height,healthStatus,mature)
      this._matureAge = 2
      this._averageFruits = 15
      this._growth = 7;
      this._die = 20;
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
