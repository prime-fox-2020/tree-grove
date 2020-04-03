const FruitTree = require('../fruit_tree.js')
const Apple = require('./apple_fruits.js')

class AppleTree extends FruitTree {
    // Initialize a new MangoTree
    constructor () {
        super(100, 4, 10, 15)
    }
    
    // Produce some appless
    produceApples () {
        if (this._age >= this._matureAge) {
            let total = Math.floor(Math.random() * 15) + 1
            for (let i = 0; i < total; i++) {
                let apple = new Apple()
                this._fruits.push(apple)
            }
        }
    }
}

module.exports = AppleTree