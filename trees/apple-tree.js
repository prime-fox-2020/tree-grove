let FruitTree = require('./fruit-tree.js')

class AppleTree extends FruitTree{ //name, age, height, matureAge, healthStatus
    constructor (age, height, healthStatus, matureAge, maxAge=25, maxHeight=15, maxFruit=8) {
      super(age, height, healthStatus, matureAge, maxAge, maxHeight, maxFruit)
    }

    grow () {
        super.grow()
    }
  
    produceApples () {
      super.produceFruits()
    }
  
    harvest () {
        let good = this.fruits[this.age].good
        let bad = this.fruits[this.age].bad
        
        this.harvested = `${good+bad} (${good} good, ${bad} bad)`
      }
  
  }
  // un-comment the code below to test the tree emulator
//   let appleTree = new AppleTree() // isi parameter nya
//   console.log('The Apple Tree is alive! :smile:')
//   do {
//     appleTree.grow();
//     appleTree.produceMangoes();
//     appleTree.harvest();
//     console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
//   } while (appleTree.healthStatus != false)
//   console.log('The Apple Tree has met its end. :sad:')

  module.exports = AppleTree