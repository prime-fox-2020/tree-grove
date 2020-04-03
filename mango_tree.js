const FruitTree = require('./fruitTree')
const Mango = require('./mango')

class MangoTree extends FruitTree {

    // Initialize a new MangoTree
    constructor(age, height, mature, healthStatus) {
        super(age, height, mature, healthStatus,25)
    }
    // Grow the tree
    grow() {
        super.grow()
    }

    // Produce some mangoes
    produceMangoes() {
        super.produceFruits()
    }

    // Get some fruits
    harvest() {
        super.harvest()
    }

}



  //driver code untuk release 0
//    let mangoTree = new MangoTree(0,0,15,true)
//    do {
//      mangoTree.grow();
//      mangoTree.produceMangoes();
//      mangoTree.harvest();
//      console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} m | Mangoes harvested = ${mangoTree.harvested}`)
//    } while (mangoTree.healthStatus != false)


module.exports = MangoTree;