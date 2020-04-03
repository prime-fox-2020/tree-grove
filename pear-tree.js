const FruitTree = require("./fruit-tree.js");

class PearTree extends FruitTree {

  // Initialize a new PearTree
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
//  console.log("===============================PEAR TREE========================================");
//  console.log("The tree is alive! :smile:");
//  let pearAge = Math.floor(Math.random()*20);
//  let pearTree = new PearTree(pearAge,7)
//  do {
//  pearTree.grow();
//  pearTree.produce();
//  pearTree.harvest();
// console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} | Fruits harvested = ${pearTree.harvested}`)
// } while (pearTree.healthStatus != false )
// console.log("The tree has met its end. :sad:");


//Export module
module.exports = PearTree;
