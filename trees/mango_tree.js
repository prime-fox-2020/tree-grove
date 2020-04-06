let tree = require('../core/tree.js')

class MangoTree extends tree.FruitTree {
  // Initialize a new MangoTree
  constructor (name, age, heights, mature, healthStatus) {
    super(name, age, heights, mature, healthStatus)
    this._maxAge = 8
  }

  // Produce some mangoes
  produceMangoes() {
    let fruiting = Math.floor(Math.random() * 15) + 2
    this._fruits = []
    if (this.Age >= this.MatureAge) {
      for (let m = 0; m < fruiting; m++) {
        this._fruits.push(new Mango())
      }
    }
  }
  
}

module.exports = MangoTree