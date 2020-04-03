const FruitTree = require('./fruitTree.js')
const Manggo = require('../fruit/manggo.js')

class ManggoTree extends FruitTree{
    constructor(name, age, height, matureAge, healthStatus,fruits, harvested, maxAge = 12, maxGrow = 8) {
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
module.exports = ManggoTree