let FruitTree = require('../basic.js')
let Pear = require('../trees/pear_tree.js')


class Fruit {
    constructor() {
        this.quality = Math.round(Math.random())
    }
}

class Pear extends Fruit {
    constructor() {
        super()
    }
}


module.exports = Fruit