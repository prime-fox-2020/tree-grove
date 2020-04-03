const FruitTree = require('./fruitTree.js')
const Pear = require('../fruit/pear')

class PearTree extends FruitTree{
    constructor(name, age, height, matureAge, healthStatus,fruits, harvested, maxAge = 8, maxGrow = 5) {
        super(age, height, matureAge, healthStatus, fruits, harvested, maxAge, maxGrow)
        this.name = name
    }

    producePears() {
        if(this._age > this._matureAge) {
            let totalFruit = Math.ceil(Math.random()*12) 
            for(let i = 0; i < totalFruit; i++) {
                let pear = new Pear
                pear.produce()
                this._fruits.push(pear.quality)
            }
        }
    }
}

module.exports = PearTree