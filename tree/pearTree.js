const FruitTree = require('./fruitTree.js')
const Pear = require('../fruit/pear')

class PearTree extends FruitTree{
    constructor(name, age, height, matureAge, healthStatus,fruits, harvested, maxAge = 9, maxGrow = 6) {
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

let pearTree = new PearTree()

// do {
//     pearTree.grow();
//     pearTree.producePears();
//     pearTree.harvest();
// console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height.toFixed(1)}m | Fruits harvested = ${pearTree.harvested} `)
// } while (pearTree.healthStatus != false)
// console.log('The Pear tree has met its end.')
// console.log('\n ===========================================\n')

module.exports = PearTree