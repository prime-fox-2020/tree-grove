const FruitTree = require('./fruitTree.js');

// let pohon = new pohon();

class MangoTree extends FruitTree{
    constructor(umurAwal,tinggiAwal,umurMati,status){
        super(umurAwal,tinggiAwal,umurMati,status)
        this.name='Mango'
        this.awalBerbuah = 4
    }
  
    grow () {
        super.grow()
        return this
    }
  
    // Produce some mangoes
    produceFruits () {
        super.produceFruits(2,5,30,50)
    }
  
    harvest () {
        super.harvest()
        return this
    }
  
}
// let mango = new MangoTree
// mango.grow()

module.exports = MangoTree
