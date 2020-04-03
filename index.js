"use strict"
const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

class Fruit {
  // Produce a mango
  constructor(grade) {
    // 20 persen buah diprediksi qualitas buruk
    this._grade = grade;
  }

  get grade() {
    return this._grade;
  }
}
class Mango extends Fruit {
  constructor(grade) {
    super(grade);
    this.name = 'Mango';
  }
}
class Apple extends Fruit {
  constructor(grade) {
    super(grade);
    this.name = 'Apple';
  }
}
class Pear extends Fruit {
  constructor(grade) {
    super(grade);
    this.name = 'Pear';
  }
}
class TreeGrove {
  constructor() {
    this._treeList = [];
  }

  get treeList() {
    return this._treeList;
  }

  inputTree(type, age, height, matureAge, healthStatus) {
    switch (type) {
      case 'MangoTree':
        this._treeList.push(new MangoTree(matureAge, age, height, healthStatus));
        break;
      case 'AppleTree':
        this._treeList.push(new AppleTree(matureAge, age, height, healthStatus));
        break;
      case 'PearTree':
        this._treeList.push(new PearTree(matureAge, age, height, healthStatus));
        break;
    }
  }
  showAges() {
    this.treeList.forEach(el => {
      console.log(`${el.name} | age: ${el.age} years`);
    });
  }
  showTrees() {
    this.treeList.forEach(el => {
      console.log(`${el.name} | height: ${(el.height / 100).toFixed(1)} | age: ${el.age} | mature age: ${el.matureAge}  | health status: ${el.healthStatus}`);
    });
  }
  showMatureTrees() {
    this.treeList.forEach(el => {
      if (el.healthStatus && el.isMature) {
        console.log(`${el.name} | height: ${(el.height / 100).toFixed(1)} | age: ${el.age} | mature age: ${el.matureAge}  | health status: ${el.healthStatus}`);
      }
    });    
  } 
  showDeadTrees() {
    this.treeList.forEach(el => {
      if (!el.healthStatus) {
        console.log(`${el.name} | height: ${(el.height / 100).toFixed(1)} | age: ${el.age} | mature age: ${el.matureAge}  | health status: ${el.healthStatus}`);
      }
    });
  }
  nextYear() {
    this.treeList.forEach(el => {
      el.grow();
    });
  }
}

var grove = new TreeGrove()
grove.inputTree("MangoTree", 3, 1.8, 7, true)
grove.inputTree("MangoTree", 5, 2.4, 12 ,true)
grove.inputTree("AppleTree", 14, 6.2, 5, true)
grove.inputTree("PearTree", 7, 2, 15, true)

// // next year
grove.nextYear()
// grove.nextYear()
// grove.nextYear()
// grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()

// // show trees ages
grove.showAges()
// // show trees
console.log('----------------- All Trees-----------------');
grove.showTrees()


// // show trees
console.log('----------------- Mature Trees-----------------');
grove.showMatureTrees()

// // show dead trees
console.log('----------------- Dead Trees-----------------');
grove.showDeadTrees()