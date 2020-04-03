const FruitTree = require('./fruitTree.js');

// let pohon = new pohon();

class PearTree extends FruitTree{
    constructor(umurAwal,tinggiAwal,umurMati,status){
        super(umurAwal,tinggiAwal,umurMati,status)
        this.name = 'Pear'
        this.awalBerbuah = 3
    }
  
    grow () {
        super.grow()
        return this
    }
  
    // Produce some mangoes
    // Pear Berbuah biasanya Umur 2 tahun
    produceFruits () {
        super.produceFruits(2,5,30,50)
    }
  
    harvest () {
        super.harvest()
        return this
    }
  
}

// let pearTree = new PearTree()
//   pearTree.harvest()
//   console.log('The Pear tree is alive! :smile:')
//   do {
//       console.log(pearTree.umurAwal)
//     if(pearTree.age>pearTree.umurAwal){
//     console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} m | Fruits harvested = ${pearTree.harvested}`);
//     }
//     pearTree.grow();
//     pearTree.produceFruits();
//     pearTree.harvest();
// } while (pearTree.healthStatus != false)

module.exports = PearTree