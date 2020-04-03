const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

class TreeGrove {
    constructor(){
        this.tree = [];
    }
    
    inputTree(treeName, age, height, mature, health) {
        if(treeName == 'MangoTree') {
           return this.tree.push(new MangoTree(age, height, mature, health));
        } else if(treeName == 'AppleTree') {
           return this.tree.push(new AppleTree(age, height, mature, health));
        } else if(treeName == 'PearTree') {
           return this.tree.push(new PearTree(age, height, mature, health));
        } 
    }
    
    nextYear() {
        for(let a = 0; a < this.tree.length; a++){
            this.tree[a].grow();
        }
    }

    showAges() {
        for(let a = 0; a < this.tree.length; a++){
            console.log(`${this.tree[a].name} | age: ${this.tree[a].age} years`);
        }
    }

    showTrees() {
        for(let a = 0; a < this.tree.length; a++){
            console.log(`${this.tree[a].name} | height: ${this.tree[a].height} | age: ${this.tree[a].age} | mature age: ${this.tree[a].matureAge} | health status: ${this.tree[a].healthStatus}`);
        }
    }

    showMatureTrees() {
        for(let a = 0; a < this.tree.length; a++){
            if(this.tree[a].age >= this.tree[a].matureAge){
                console.log(`${this.tree[a].name} | height: ${this.tree[a].height} | age: ${this.tree[a].age} | mature age: ${this.tree[a].matureAge} | health status: ${this.tree[a].healthStatus}`);
            }
        }
    }

    showDeadTrees(){
        for(let a = 0; a < this.tree.length; a++){
            if(this.tree[a].healthStatus == false){
                console.log(`${this.tree[a].name} | height: ${this.tree[a].height} | age: ${this.tree[a].age} | mature age: ${this.tree[a].matureAge} | health status: ${this.tree[a].healthStatus}`);
            }
        }
    }
}

var grove = new TreeGrove();
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

// next Year
grove.nextYear()

// show trees ages
console.log('_________SHOW AGE_________')
grove.showAges()

// show trees
console.log('_________ALL TREES_________')
grove.showTrees()

// show trees
console.log('_________MATURE TREES_________')
grove.showMatureTrees()

// show trees
console.log('_________DEAD TREES_________')
grove.showDeadTrees()
