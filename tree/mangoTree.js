const FruitTree = require('./fruitTree.js')
const Manggo = require('../fruit/manggo.js')

class ManggoTree extends FruitTree{
    constructor(name, age, height, matureAge, healthStatus,fruits, harvested, maxAge = 20, maxGrow = 10) {
        super(age, height, matureAge, healthStatus, fruits, harvested, maxAge, maxGrow)
        this.name = name
    }

    produceMangoes() {
        if(this._age > this._matureAge) {
            let totalFruit = Math.ceil(Math.random()*10) 
            for(let i = 0; i < totalFruit; i++) {
                let manggo = new Manggo
                manggo.produce()
                this._fruits.push(manggo.quality)
            }
        }
    }
}

let mangoTree = new ManggoTree()

// do {
//     mangoTree.grow();
//     mangoTree.produceMangoes();
//     mangoTree.harvest();
//     console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height.toFixed(1)}m | Fruits harvested = ${mangoTree.harvested} `)
// } while (mangoTree.healthStatus != false)
// console.log('The Mango tree has met its end.')
// console.log('\n ===========================================\n')

module.exports = ManggoTree