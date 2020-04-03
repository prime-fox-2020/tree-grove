const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

class TreeGrove {
  constructor() {
      this.tree = []
  }

  inputTree(name, age, height, matureAge, healthStatus) { 
    if(name == 'MangoTree') {
      this.tree.push(new MangoTree(name, age, height, matureAge, healthStatus))
    }
    if(name == 'AppleTree') {
      this.tree.push(new AppleTree(name, age, height, matureAge, healthStatus))
    }
    if(name == 'PearTree') {
      this.tree.push(new PearTree(name, age, height, matureAge, healthStatus))
    }
  }
    
  nextYear() {
    for(let i = 0; i < this.tree.length; i++) {
      this.tree[i].grow()      
    }
    return this
  }
  
  showAges() {
    for(let i = 0; i < this.tree.length; i++) {
      console.log(`${this.tree[i].name} | Age : ${this.tree[i].age}`)
    }
  }

  showTrees() {
    for(let i = 0; i < this.tree.length; i++) {
      console.log(`${this.tree[i].name} | Height: ${this.tree[i].height.toFixed(1)} | Age : ${this.tree[i].age} | Mature Age: ${this.tree[i].matureAge} | Health Status: ${this.tree[i].healthStatus}`)
    }
  }

  showMatureTrees() {
    for(let i = 0; i < this.tree.length; i++) {
      if(this.tree[i].age >= this.tree[i].matureAge) {
        console.log(`${this.tree[i].name} | Height: ${this.tree[i].height.toFixed(1)} | Age : ${this.tree[i].age} | Mature Age: ${this.tree[i].matureAge} | Health Status: ${this.tree[i].healthStatus}`)
      }
    }
  }

  showDeadTrees() {
    for(let i = 0; i < this.tree.length; i++) {
      if(this.tree[i].healthStatus == false) {
        console.log(`${this.tree[i].name} | Height: ${this.tree[i].height.toFixed(1)} | Age : ${this.tree[i].age} | Mature Age: ${this.tree[i].matureAge} | Health Status: ${this.tree[i].healthStatus}`)
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
grove.inputTree("MangoTree", 13, 1.8, 7, true)
grove.inputTree("MangoTree", 15, 2.4, 12 ,true)
grove.inputTree("AppleTree", 14, 1.2, 5, true)
grove.inputTree("PearTree", 17, 2, 15, true)

// grove.inputTree("PearTree", 9, 12, 7, true)


// // next year
grove.nextYear()

// // show trees ages
console.log(`----------------- Next Year -----------------`)
grove.showAges()

// // show trees
console.log(`----------------- All Trees -----------------`)
grove.showTrees()

// // show trees
console.log(`----------------- Mature Trees -----------------`)
grove.showMatureTrees()

// // show trees
console.log(`----------------- Dead Trees -----------------`)
grove.showDeadTrees()


// Mango Tree | age: 14 years
// Mango Tree | age: 16 years
// Apple Tree | age: 15 years
// Pear Tree  | age: 18 years
// ----------------- All Trees -----------------
// Mango Tree | height: 53.7  | age: 14 | mature age: 7  | health status: true
// Mango Tree | height: 54.62 | age: 16 | mature age: 12 | health status: true
// Apple Tree | height: 36.75 | age: 15 | mature age: 5  | health status: false
// Pear Tree  | height: 66.79 | age: 18 | mature age: 15 | health status: true
// ----------------- Mature Trees -----------------
// Mango Tree | height: 53.7  | age: 14 | mature age: 7  | health status: true
// Mango Tree | height: 54.62 | age: 16 | mature age: 12 | health status: true
// Apple Tree | height: 36.75 | age: 15 | mature age: 5  | health status: false
// Pear Tree  | height: 66.79 | age: 18 | mature age: 15 | health status: true
// ----------------- Dead Trees -----------------
// Apple Tree | height: 36.75 | age: 15 | mature age: 5  | health status: false