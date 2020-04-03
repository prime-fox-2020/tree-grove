const Fruit = require('./mango_tree.js')
const random = Fruit.random 

// Pear

class PearTree extends Fruit.FruitTree {

    grow (old = 7) {
      this._age++
      if (this._age <= old) this._height += ~~(Fruit.random() * 0.3)
      if (this._age > 12) this._healthStatus = false
      return this
    }
  
    producePears (mature = 3) {
    this._fruits = []
    if (this._age < mature) return this // produce fruits after mature at 4
    let num = random() + 15    
    for (let i = 0; i < num; i++) {
      let newFruit = new Pear()
      newFruit.ripe()   
      this._fruits.push(newFruit.fruit)
    }
    return this
  }
  
}
  
class Pear extends Fruit.Fruit {}
  
module.exports = PearTree;