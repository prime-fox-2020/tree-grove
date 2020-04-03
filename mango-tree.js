const FruitTree = require("./fruit-tree.js");

class MangoTree extends FruitTree {

  // Initialize a new MangoTree
  constructor (nama, umur, tinggi, matureAge, healthStat) {
    super(nama, umur, tinggi, matureAge, healthStat);
  }

  grow () {
    super.grow();
  }

  produce () {
    super.produce();
  }

  harvest () {
    super.harvest();
  }

}

 // driver code untuk release 0
//  console.log("================================================================================");
//  console.log("===============================MANGO TREE=======================================");
//  console.log("The tree is alive! :smile:");
//  let mangoTree = new MangoTree(10,5)
//  do {
//  mangoTree.grow();
//  mangoTree.produce();
//  mangoTree.harvest();
// console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
// } while (mangoTree.healthStatus != false )
// console.log("The tree has met its end. :sad:");


//Export modules
module.exports = MangoTree;
