const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

class TreeGrove {
  constructor() {
    this._names = [];
    this._trees = [];
  }

  get names() {
    return this._names;
  }
  get trees() {
    return this._trees;
  }

  inputTree(treeType, age, height, mature, healthStatus) {
    switch (treeType) {
      case 'MangoTree':
        this._trees.push(new MangoTree(age, height, mature, healthStatus));
        this._names.push('Mango Tree');
        break;
      case 'AppleTree':
        this._trees.push(new AppleTree(age, height, mature, healthStatus));
        this._names.push('Apple Tree');
        break;
      case 'PearTree':
        this._trees.push(new PearTree(age, height, mature, healthStatus));
        this._names.push('Pear Tree');
        break;
    }
  }

  nextYear() {
    for (let i = 0; i < this.trees.length; i++) {
      this.trees[i].grow();
    }
  }

  showAges() {
    for (let i = 0; i < this.trees.length; i++) {
      console.log(`${this.names[i]} | age: ${this.trees[i].age} years`);
    }
  }
  
  showTrees() {
    console.log('----------------------------- All Trees -----------------------------');
    for (let i = 0; i < this.trees.length; i++) {
      console.log(`${this.names[i]} | height: ${this.trees[i].height} m | age: ${this.trees[i].age} years | mature age: ${this.trees[i].matureAge} | health status: ${this.trees[i].healthStatus}`);
    }
  }

  showMatureTrees() {
    console.log('----------------------------- Mature Trees -----------------------------');
    for (let i = 0; i < this.trees.length; i++) {
      if (this.trees[i].age >= this.trees[i].matureAge) {
        console.log(`${this.names[i]} | height: ${this.trees[i].height} m | age: ${this.trees[i].age} years | mature age: ${this.trees[i].matureAge} | health status: ${this.trees[i].healthStatus}`);
      }
    }
  }

  showDeadTrees() {
    console.log('----------------------------- Dead Trees -----------------------------');
    for (let i = 0; i < this.trees.length; i++) {
      if (!this.trees[i].healthStatus) {
        console.log(`${this.names[i]} | height: ${this.trees[i].height} m | age: ${this.trees[i].age} years | mature age: ${this.trees[i].matureAge} | health status: ${this.trees[i].healthStatus}`);
      }
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
grove.nextYear()

// show trees ages
grove.showAges()

// show trees
grove.showTrees()

// show trees
grove.showMatureTrees()

// show trees
grove.showDeadTrees()

