const Fruit = require('./mango_tree.js')
const random = Fruit.random

// Apple

class AppleTree extends Fruit.FruitTree {

    grow (old = 5) {
      this._age++
      if (this._age <= old) this._height += ~~(Fruit.random() * 0.5)
      if (this._age > 12) this._healthStatus = false
      return this
    }
  
    produceApples (mature = 2) {
        this._fruits = []
        if (this._age < mature) return this // produce fruits after mature at 4
        let num = random() + 10 + ~~(this._age / 2) 
        for (let i = 0; i < num; i++) {
          let newFruit = new Apple()
          newFruit.ripe()   
          this._fruits.push(newFruit.fruit)
        }
        return this
     }
}
  
class Apple extends Fruit.Fruit {}

module.exports = AppleTree;