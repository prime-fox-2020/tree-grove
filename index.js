const MangoTree = require('./mango/mangoTree.js');
const AppleTree = require('./apple/appleTree.js');
const PearTree = require('./pear/pearTree.js');

class TreeGrove {
  constructor(){
    this._grove = [];
  }

  get grove(){
    return this._grove;
  }

  set grove(val){
    this._grove = val;
  }

  //method
  inputTree(treeName, treeAge, treeHeight, matureAge, healthStatus){
    if(treeName === "MangoTree"){
      const mango = new MangoTree(treeAge, treeHeight, matureAge, healthStatus);
      // mango.grow();
      mango.produceMangos();
      this.grove.push(mango);
    }
    if(treeName === "AppleTree"){
      const apple = new AppleTree(treeAge, treeHeight, matureAge, healthStatus);
      // apple.grow();
      apple.produceApples();
      this.grove.push(apple);
    }
    if(treeName === "PearTree"){
      const pear = new PearTree(treeAge, treeHeight, matureAge, healthStatus);
      // pear.grow();
      pear.producePears();
      this.grove.push(pear);
    }
  }

  nextYear(){
    for(let tree of this.grove){
      tree.grow();
    }
  }

  showAges(){
    for(let tree of this.grove){
      console.log(`${tree.constructor.name} | age: ${tree.age} years`);
    }
  }

  showTrees(){
    console.log(`----------------- All Trees -----------------`);
    for(let tree of this.grove){
      console.log(`${tree.constructor.name} | height: ${tree.height}  | age: ${tree.age} | mature age: ${tree.matureAge}  | health status: ${tree.healthStatus}`)
    }
  }

  showMatureTrees(){
    console.log(`----------------- Mature Trees -----------------`);
    for(let tree of this.grove){
      if(tree.mature){
        console.log(`${tree.constructor.name} | height: ${tree.height}  | age: ${tree.age} | mature age: ${tree.matureAge}  | health status: ${tree.healthStatus}`);
      }
    }
  }

  showDeadTrees(){
    console.log(`----------------- Dead Trees -----------------`);
    for(let tree of this.grove){
      if(!tree.healthStatus){
        console.log(`${tree.constructor.name} | height: ${tree.height}  | age: ${tree.age} | mature age: ${tree.matureAge}  | health status: ${tree.healthStatus}`);
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
