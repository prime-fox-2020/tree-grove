const FruitTree = require('./FruitTree')
const Pear = require('./pear')

class PearTree extends FruitTree {
    constructor(age,height,mature,healthStatus) {
        super(age, height, mature, healthStatus, 35)
    }

    grow() {
        super.grow()
    }

    producePear() {
        super.produceFruits()
    }
    harvest() {
        super.harvest()
    }
}

// let PearTree = new pearTree(0,0,15,true)
// do {
//     PearTree.grow();
//     PearTree.producePear();
//     PearTree.harvest();
//     console.log(`[Year ${PearTree.age} Report] Height = ${PearTree.height} m | Pears harvested = ${PearTree.harvested}`)
// } while (PearTree.healthStatus != false)

module.exports = PearTree;