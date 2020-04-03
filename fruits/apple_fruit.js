let FruitTree = require('../basic.js')
let Apple = require('../trees/apple_tree.js')

class Fruit {
    constructor() {
        this.quality = Math.round(Math.random())
    }
}

class Apple extends Fruit {
    constructor() {
        super()
    }
}

module.exports = Fruit
