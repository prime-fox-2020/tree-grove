let FruitTree = require('./fruit-tree.js')

class PearTree extends FruitTree{ //name, age, height, matureAge, healthStatus
    constructor (age, height, healthStatus, matureAge, maxAge=50, maxHeight=20, maxFruit=9) {
      super(age, height, healthStatus, matureAge, maxAge, maxHeight, maxFruit)
    }

    grow () {
        super.grow()
    }
  
    producePears () {
      super.produceFruits()
    }
  
    harvest () {
        let good = this.fruits[this.age].good
        let bad = this.fruits[this.age].bad
        
        this.harvested = `${good+bad} (${good} good, ${bad} bad)`
      }
  
  }

  // un-comment the code below to test the tree emulator
//   let pearTree = new PearTree() // isi parameter nya
//   console.log('The Pear Tree is alive! :smile:')
//   do {
//     pearTree.grow();
//     pearTree.produceMangoes();
//     pearTree.harvest();
//     console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} | Fruits harvested = ${pearTree.harvested}`)
//   } while (pearTree.healthStatus != false)
//   console.log('The Pear Tree has met its end. :sad:')

  module.exports = PearTree