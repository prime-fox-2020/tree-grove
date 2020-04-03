"use strict"

const FruitTree = require('../fruit/fruit_tree')
const Mango = require('./mango')

class MangoTree extends FruitTree{
    constructor (name, age, height, matureAge, healthStatus, fruits, harvested , limitAge, limitHeight) {
        super(name, age, height, matureAge, healthStatus, fruits, harvested , limitAge, limitHeight)
    }
    produceMangoes() {
        if(this.age > 0){
            let countFruits = Math.floor(Math.random() * 7) + 1
        
            for(let i = 0; i < countFruits; i++){
                let fruit = new Mango()
                fruit.qualityFruits()
                this.fruits.push(fruit.quality)
            }
        }
    }
}

module.exports = MangoTree