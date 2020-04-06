let tree = require('../core/tree.js')

class AppleTree extends tree.FruitTree {
    constructor (name, age, heights, mature, healthStatus) {
      super(name, age, heights, mature, healthStatus)
      this._maxAge = 10
    }
  
    producingApples() {
      let fruiting = Math.floor(Math.random() * this._maxAge) * 5
      this._fruits = []
  
      for (let a = 0; a < fruiting; a++) {
        this._fruits.push(new Apple())
      }
    }
  }

  module.exports = AppleTree