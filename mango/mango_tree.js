const FruitTree = require('../fruit_tree.js')
const Mango = require('./mango_fruits.js')

class MangoTree extends FruitTree {
    constructor () {
        super(100, 7, 18, 16)
    }

    // Produce some mangoes
    produceMangoes () {
        if (this._age >= this._matureAge) {
            let total = Math.floor(Math.random() * 15) + 1
            for (let i = 0; i < total; i++) {
                let mango = new Mango()
                this._fruits.push(mango)
            }
        }
    }
}

module.exports = MangoTree



