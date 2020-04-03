let FruitTree = require('./fruit-tree.js')

class MangoTree extends FruitTree{ //name, age, height, matureAge, healthStatus
    constructor (age, height, healthStatus, matureAge, maxAge=100, maxHeight=40, maxFruit=10) {
      super(age, height, healthStatus, matureAge, maxAge, maxHeight, maxFruit)
    }

    grow () {
        super.grow()
    }
  
    produceMangoes () {
      super.produceFruits()
    }
  
    harvest () {
        let good = this.fruits[this.age].good
        let bad = this.fruits[this.age].bad
        
        this.harvested = `${good+bad} (${good} good, ${bad} bad)`
      }
  
  }
 // un-comment the code below to test the tree emulator
//   let mangoTree = new MangoTree() // isi parameter nya
//   console.log('The Mango Tree is alive! :smile:')
//   do {
//     mangoTree.grow();
//     mangoTree.produceMangoes();
//     mangoTree.harvest();
//     console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
//   } while (mangoTree.healthStatus != false)
//   console.log('The Mango Tree has met its end. :sad:')

  module.exports = MangoTree