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

let appleTree = new AppleTree()

// do {
//     appleTree.grow();
//     appleTree.produceApples();
//     appleTree.harvest();
//     console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height.toFixed(1)}m | Fruits harvested = ${appleTree.harvested} `)
// } while (appleTree.healthStatus != false)
// console.log('The Apple tree has met its end.')
// console.log('\n ===========================================\n')

module.exports = AppleTree