"use strict"

const Fruit = require('../fruit/fruit')

class Pear extends Fruit{
    constructor(quality){
        super(quality)
    }
}

module.exports = Pear