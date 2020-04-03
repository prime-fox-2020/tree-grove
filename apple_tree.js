const FruitTree = require('./fruitTree.js');

// let pohon = new pohon();

class AppleTree extends FruitTree{
    constructor(umurAwal,tinggiAwal,umurMati,status){
        super(umurAwal,tinggiAwal,umurMati,status)
        this.name='Apple'
        this.awalBerbuah = 5
    }
  
    grow () {
        super.grow()
        return this
    }
  
    // Produce some mangoe
    produceFruits () {
        super.produceFruits(2,5,30,50)
    }
  
    harvest () {
        super.harvest()
        return this
    }
  
}

module.exports = AppleTree
