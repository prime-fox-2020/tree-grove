"use strict"
const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

class TreeGrove {
  constructor() {
    this._treeList = [];
  }

  get treeList() {
    return this._treeList;
  }
  static advance (treeGroveName, nYears) {
    for (let i = 0; i < nYears; i++) {
      setTimeout(() => treeGroveName.nextYear(), 2000);
      // setTimeout(treeGroveName.nextYear.bind(treeGroveName), 2000);
      // treeGroveName.nextYear();
    }
  }
  inputTree(type, age, height, matureAge, healthStatus) {
    let tree;
    switch (type) {
      case 'MangoTree':
        tree = new MangoTree(matureAge, age, height, healthStatus);
        break;
      case 'AppleTree':
        tree = new AppleTree(matureAge, age, height, healthStatus);
        break;
      case 'PearTree':
        tree = new PearTree(matureAge, age, height, healthStatus);
        break;
    }
    if (tree) this._treeList.push(tree);
    return tree;
  }
  showAges() {
    this.treeList.forEach(el => {
      console.log(`${el.name} | age: ${el.age} years`);
    });
    console.log('\n');
  }
  showTrees() {
    console.log('----------------- All Trees-----------------\n');
    this.treeList.forEach(el => {
      console.log(`${el.name} | height: ${(el.height / 100).toFixed(1)} | age: ${el.age} | mature age: ${el.matureAge}  | health status: ${el.healthStatus}`);
    });
    console.log('\n');
  }
  showMatureTrees() {
    console.log('----------------- Mature Trees-----------------\n');
    this.treeList.forEach(el => {
      if (el.healthStatus && el.isMature) {
        console.log(`${el.name} | height: ${(el.height / 100).toFixed(1)} | age: ${el.age} | mature age: ${el.matureAge}  | health status: ${el.healthStatus}`);
      }
    });
    console.log('\n');
  } 
  showDeadTrees() {
    console.log('----------------- Dead Trees-----------------\n');
    this.treeList.forEach(el => {
      if (!el.healthStatus) {
        console.log(`${el.name} | height: ${(el.height / 100).toFixed(1)} | age: ${el.age} | mature age: ${el.matureAge}  | health status: ${el.healthStatus}`);
      }
    });
    console.log('\n');
  }
  nextYear() {
    debugger
    this.treeList.forEach(el => {
      el.grow();
    });
    this.showTrees();
    this.showMatureTrees();
    this.showDeadTrees();
  }
}

var grove = new TreeGrove()
grove.inputTree("MangoTree", 3, 1.8, 7, true)
grove.inputTree("MangoTree", 5, 2.4, 12 ,true)
grove.inputTree("AppleTree", 14, 6.2, 5, true)
grove.inputTree("PearTree", 7, 2, 15, true)

// // next year
TreeGrove.advance(grove, 10);
// grove.nextYear()
// grove.nextYear()
// grove.nextYear()
// grove.nextYear()
// grove.nextYear()
// grove.nextYear()
// grove.nextYear()
// grove.nextYear()
// grove.nextYear()
// grove.nextYear()

// // // show trees ages
// grove.showAges()
// // // show trees
// console.log('----------------- All Trees-----------------');
// grove.showTrees()


// // // show trees
// console.log('----------------- Mature Trees-----------------');
// grove.showMatureTrees()

// // // show dead trees
// console.log('----------------- Dead Trees-----------------');
// grove.showDeadTrees()