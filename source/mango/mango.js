"use strict"

const Fruit = require('../fruit/fruit')

class Mango extends Fruit {
    constructor(quality){
        super(quality)
    }
}

module.exports = Mango