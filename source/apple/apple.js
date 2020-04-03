"use strict"

const Fruit = require('../fruit/fruit')

class Apple extends Fruit{
    constructor(quality){
        super(quality)
    }
}

module.exports = Apple