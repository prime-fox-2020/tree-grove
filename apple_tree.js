const FruitTree = require('./fruitTree')
const Apple = require('./apple')

class AppleTree extends FruitTree {
    constructor(age, height, matureAge, healthStatus) {
        super(age, height, matureAge, healthStatus,40)
    }

    grow() {
        super.grow()
    }

    produceApples() {
        super.produceFruits()
    }

    // Get some fruits
    harvest() {
        super.harvest()
    }
}

// let appleTree = new AppleTree(0,0,15,true)
// do {
//     appleTree.grow();
//     appleTree.produceApples();
//     appleTree.harvest();
//     console.log(`[Year ${appleTree._age} Report] Height = ${appleTree._height} m | Apples harvested = ${appleTree._harvested}`)
// } while (appleTree._healthStatus != false)


module.exports = AppleTree