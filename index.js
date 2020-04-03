const MangoTree = require("./mango_tree.js");
const AppleTree = require("./apple_tree.js");
const PearTree = require("./pear_tree.js");
const FruitTree = require("./fruit_tree.js").FruitTree;

class TreeGrove {
  constructor() {
    this.trees = [];
  }
  inputTree(name, age, height, matureAge, healthStatus, stopGrow, dead) {
    if (name === "MangoTree") {
      this.trees.push(
        new MangoTree(
          name,
          age,
          height,
          matureAge,
          healthStatus,
          stopGrow,
          dead
        )
      );
    } else if (name === "AppleTree") {
      this.trees.push(
        new AppleTree(
          name,
          age,
          height,
          matureAge,
          healthStatus,
          stopGrow,
          dead
        )
      );
    } else if (name === "PearTree") {
      this.trees.push(
        new PearTree(name, age, height, matureAge, healthStatus, stopGrow, dead)
      );
    } else {
      this.trees.push(
        new FruitTree(
          name,
          age,
          height,
          matureAge,
          healthStatus,
          stopGrow,
          dead
        )
      );
    }
  }
  nextYear() {
    for (let i = 0; i < this.trees.length; i++) {
      console.log("=============================================");
      console.log(this.trees[i]);
      this.trees[i].grow();
      this.trees[i].produceFruits();
      console.log("====================NEXT YEAR================");
      console.log(this.trees[i]);
    }
  }

  showAges() {
    console.log("\n");
    console.log(`Umur Pohon :`);
    this.trees.forEach(tree => {
      console.log(`${tree.name} age : ${tree.age}`);
    });
  }

  showTrees() {
    console.log("\n");
    console.log(`Pohon yang ada di taman :`);
    this.trees.forEach(tree => {
      console.log(`${tree.name}`);
    });
  }

  showMatureTrees() {
    console.log("\n");
    console.log(`Pohon yang sedang berbuah :`);
    this.trees.forEach(tree => {
      if (tree.age >= tree.matureAge) {
        console.log(tree.name);
      }
    });
  }

  showDeadTrees() {
    console.log("\n");
    console.log(`Pohon yang mati :`);
    this.trees.forEach(tree => {
      if (tree.age >= tree.dead) {
        console.log(tree.name);
      }
    });
  }

  showGrow() {
    console.log("\n");
    console.log("Petik buah");
    this.trees.forEach((tree, index) => {
      console.log(`Pohon : ${tree.name}`);
      do {
        this.trees[index].grow();
        this.trees[index].produceFruits();
      } while (this.trees[index].healthStatus != false);
      this.trees[index].harvest();
      console.log(
        `[Year ${this.trees[index].age} Report] Height = ${this.trees[index].height} m | Fruits harvested = ${this.trees[index].harvested}`
      );
      console.log("\n");
    });
  }
}

var grove = new TreeGrove();
// input your trees data !
// parameter ke-1: nama pohon
// parameter ke-2: umur pohon ketika ditanam di taman tersebut
// pamareter ke-3: tinggi pohon pertama kali ketika ditanam di taman tersebut
// parameter ke-4: umur mature pohon tersebut
// parameter ke-5: healthStatus dari pohon tersebut ketika ditanam
grove.inputTree("MangoTree", 3, 1.8, 7, true, 13, 15);
grove.inputTree("MangoTree", 5, 2.4, 12, true, 4, 5);
grove.inputTree("AppleTree", 4, 1.2, 5, true, 11, 12);
grove.inputTree("PearTree", 7, 2, 15, true, 14, 15);

// next year
grove.nextYear();

// show trees ages
grove.showAges();

// show trees
grove.showTrees();

// show trees
grove.showMatureTrees();

// show trees
grove.showDeadTrees();
