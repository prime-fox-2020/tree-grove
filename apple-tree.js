const FruitTree = require("./fruit-tree.js");

class AppleTree extends FruitTree {
  // Initialize a new AppleTree
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
// console.log("================================================================================");
// console.log("===============================APPLE TREE=======================================");


//     console.log("The tree is alive! :smile:");
//     let appleAge = Math.floor(Math.random()*100);
//     let appleTree = new AppleTree(appleAge, 10);
//     do {
//     appleTree.grow();
//     appleTree.produce();
//     appleTree.harvest();
//     console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
// } while (appleTree.healthStatus != false)
//
// if (appleTree._age > 50) {
//   console.log("The tree lives long enough :)");
// }
// else if (appleTree._age <= 20) {
//   console.log("The tree is still a teenager");
// }
// else if (appleTree._age >= 20 && appleTree._age <= 50) {
//   console.log("The tree is mature");
// }


//Export module
module.exports = AppleTree;
