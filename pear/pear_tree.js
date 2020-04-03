const FruitTree = require('../fruit_tree.js')
const Pear = require('./pear_fruits.js')

class PearTree extends FruitTree {
    // Initialize a new PearTree
    constructor () {
        super(100, 9, 19, 18)
    }
    
    // Produce some Pears
    producePears () {
        if (this._age >= this._matureAge) {
            let total = Math.floor(Math.random() * 15) + 1
            for (let i = 0; i < total; i++) {
                let apple = new Pear()
                this._fruits.push(apple)
            }
        }
    }
}
  
module.exports = PearTree