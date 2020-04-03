const FruitTree = require('./fruitTree.js')
const Apple = require('../fruit/apple.js')

class AppleTree extends FruitTree{
    constructor(name, age, height, matureAge, healthStatus,fruits, harvested, maxAge = 10, maxGrow = 7) {
        super(age, height, matureAge, healthStatus, fruits, harvested, maxAge, maxGrow)
        this.name = name
    }

    produceApples() {
        if(this._age > this._matureAge) {
            let totalFruit = Math.ceil(Math.random()*10) 
            for(let i = 0; i < totalFruit; i++) {
                let apple = new Apple
                apple.produce()
                this._fruits.push(apple.quality)
            }
        }
    }
}

module.exports = AppleTree