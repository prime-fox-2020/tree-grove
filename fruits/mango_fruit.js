let FruitTree = require('../basic.js')
let Mango = require('../trees/mango_tree.js')

class Fruit {
    constructor() {
        this.quality = Math.round(Math.random())
    }
}

class Mango extends Fruit {
    constructor() {
        super()
    }
}

module.exports = Fruit
