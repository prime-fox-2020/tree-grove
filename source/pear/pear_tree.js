"use strict"

const FruitTree = require('../fruit/fruit_tree')
const Pear = require('./pear')

class PearTree extends FruitTree{
    constructor (name, age, height, matureAge, healthStatus, fruits, harvested , limitAge, limitHeight) {
        super(name, age, height, matureAge, healthStatus, fruits, harvested , limitAge, limitHeight)
    }
    producePears() {
        if(this.age > 0){
            let countFruits = Math.floor(Math.random() * 7) + 1
        
            for(let i = 0; i < countFruits; i++){
                let fruit = new Pear()
                fruit.qualityFruits()
                this.fruits.push(fruit.quality)
            }
        }
    }
}

module.exports = PearTree