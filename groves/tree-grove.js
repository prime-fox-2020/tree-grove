const MangoTree = require('../trees/mango_tree.js');
const AppleTree = require('../trees/apple_tree.js');
const PearTree = require('../trees/pear_tree.js');

class TreeGrove {
  constructor() {
    this.grove = [];
  }

  inputTree(name, age, height, matureAge, healthStatus) {
    let msg = `Invalid Tree Name.
        Try: ['MangoTree', 'AppleTree', 'PearTree']`;

    if (name === 'MangoTree') {
      this.grove.push(new MangoTree(name, age, height, matureAge, healthStatus));
    } else if (name === 'AppleTree') {
      this.grove.push(new AppleTree(name, age, height, matureAge, healthStatus));
    } else if (name === 'PearTree') {
      this.grove.push(new PearTree(name, age, height, matureAge, healthStatus));
    } else {
      console.log(msg);
    }
  }

  showAges() {
    let ageOfTrees = [];

    for (let tree in this.grove) {
      let matchedTree = new Object();
      matchedTree['name'] = this.grove[tree].name;
      matchedTree['plantedAtAge'] = this.grove[tree].plantedAtAge;
      matchedTree['age'] = this.grove[tree].age;
      ageOfTrees.push(matchedTree);
    }


    console.log(`Show Ages: `, ageOfTrees);
  }

  showTrees() {
    let allTrees = [];

    for (let tree in this.grove) {
      let matchedTree = new Object();

      matchedTree['name'] = this.grove[tree].name;

      allTrees.push(matchedTree);
    }

    console.log(`All Trees: `, allTrees);
  }

  showMatureTrees() {
    let matureTrees = [];

    for (let tree in this.grove) {
      if (this.grove[tree].age >= this.grove[tree].matureAge) {
        let matchedTree = new Object();
        matchedTree['name'] = this.grove[tree].name;
        matchedTree['plantedAtAge'] = this.grove[tree].plantedAtAge;
        matchedTree['matureAge'] = this.grove[tree].matureAge;
        matchedTree['age'] = this.grove[tree].age;
        matureTrees.push(matchedTree);
      }
    }

    console.log(`Mature Trees: `, matureTrees);
  }

  showDeadTrees(yearPassed) {
    let deadTrees = [];

    for (let tree in this.grove) {
      if (this.grove[tree].healthStatus === false) {
        let matchedTree = new Object();
        matchedTree['name'] = this.grove[tree].name;
        matchedTree['plantedAtAge'] = this.grove[tree].plantedAtAge;
        matchedTree['diedAtAge'] = this.grove[tree].age;
        deadTrees.push(matchedTree);
      }
    }

    if (deadTrees.length === 0) {
      console.log(`No dead trees in the past ${yearPassed} year(s).`);
    } else {
      console.log(`Dead Trees: `, deadTrees);
    }
  }

  nextYear(yearPassed = 1) {
    for (let tree in this.grove) {
      if (yearPassed < this.grove[tree].deadAge) {
        this.grove[tree].grow();
      }
    }
  }
}

module.exports = TreeGrove;