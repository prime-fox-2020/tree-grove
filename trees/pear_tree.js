let tree = require('../core/tree.js')

class PearTree extends tree.FruitTree {
  constructor (name, age, heights, mature, healthStatus) {
    super(name, age, heights, mature, healthStatus)
    this._maxAge = 8
  }

  producingPears() {
    let fruiting = Math.floor(Math.random() * this._maxAge) * 5
    this._fruits = []

    for (let a = 0; a < fruiting; a++) {
      this._fruits.push(new Pears())
    }
  }
}
  

module.exports = PearTree