const MangoTree = require('./mango-tree.js');
const AppleTree = require('./apple-tree.js');
const PearTree = require('./pear-tree.js');

class TreeGrove {
  constructor(){
    this.trees = [];
  }

  inputTree(nama, umur, tinggi, matureAge, healthStat) {
    if (nama == "MangoTree") {
      this.trees.push(new MangoTree(nama, umur, tinggi, matureAge, healthStat));
    }
    else if (nama == "AppleTree") {
      this.trees.push(new AppleTree(nama, umur, tinggi, matureAge, healthStat));
    }
    else if(nama == "PearTree") {
      this.trees.push(new PearTree(nama, umur, tinggi, matureAge, healthStat));
    }
  }

  showAges() {
    for (let i = 0; i < this.trees.length; i++) {
      console.log(`${this.trees[i].name} | Age: ${this.trees[i].age}`);
    }
  }

  showTrees() {
    console.log("=============All Trees====================");
    for (let j = 0; j < this.trees.length; j++) {
      console.log(`${this.trees[j].name} | Height: ${this.trees[j].height} | MatureAge : ${this.trees[j].matureAge} | HealthStat : ${this.trees[j].healthStat}`);
    }
  }

  showMatureTrees() {
    for (let k = 0; k < this.trees.length; k++) {
      if (this.trees[k].matureAge <= this.trees[k].age) {
        console.log("=============Mature Tree====================");
        console.log(`${this.trees[k].name} | Height: ${this.trees[k].height} | MatureAge : ${this.trees[k].matureAge} | HealthStat : ${this.trees[k].healthStat}`);
      }
    }
  }

  showDeadTrees() {
    console.log("=============Dead Tree====================");
     for (var l = 0; l < this.trees.length; l++) {
         if (this.trees[l].healthStat === false) {
          console.log(`${this.trees[l].name} | Height : ${this.trees[l].height} | Age: ${this.trees[l].age} | Health : ${this.trees[l].healthStat}`);
         }
    }
  }

  nextYear() {
    for (let m = 0; m < this.trees.length; m++) {
      this.trees[m].grow();
    }
  }
}

var grove = new TreeGrove()
// input your trees data !
// parameter ke-1: nama pohon
// parameter ke-2: umur pohon ketika ditanam di taman tersebut
// pamareter ke-3: tinggi pohon pertama kali ketika ditanam di taman tersebut
// parameter ke-4: umur mature pohon tersebut
// parameter ke-5: healthStatus dari pohon tersebut ketika ditanam
grove.inputTree("MangoTree", 3, 1.8, 7, true)
grove.inputTree("MangoTree", 5, 2.4, 12 ,true)
grove.inputTree("AppleTree", 4, 1.2, 5, true)
grove.inputTree("PearTree", 7, 2, 15, true)

// next year
  grove.nextYear();

// show trees ages
grove.showAges()

// show trees
grove.showTrees()


// show trees
grove.showMatureTrees()

// show trees
grove.showDeadTrees()
