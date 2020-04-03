const MangoTree = require('./tree/mangoTree.js');
const AppleTree = require('./tree/appleTree.js');
const PearTree = require('./tree/pearTree.js');

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
        console.log('---------NEXT YEAR---------')
        for(let i = 0; i < this.tree.length; i++) {
            this.tree[i].grow()
            console.log(`${this.tree[i].name} || Age : ${this.tree[i].age} || Health : ${this.tree[i].healthStatus}`)
        }
        
        // console.log(`Age : ${mango.age} Height: ${mango.height.toFixed(1)} || Health Status : ${mango.healthStatus}`)
    }

    showAges() {
        console.log('------------AGES-------------')
        for(let i = 0; i < this.tree.length; i++) {
            console.log(`${this.tree[i].name} || Age : ${this.tree[i].age}`)
        }
    }

    showTrees() {
        console.log('-----------ALL TREES----------')
        for(let i = 0; i < this.tree.length; i++) {
            console.log(`${this.tree[i].name} || Height: ${this.tree[i].height.toFixed(1)} || Mature Age: ${this.tree[i].matureAge} || Health Status: ${this.tree[i].healthStatus}`)
        }
    }

    showMatureTrees() {
        console.log('---------MATURE TREES-----------')
        for(let i = 0; i < this.tree.length; i++) {
            if(this.tree[i].age >= this.tree[i].matureAge) {
                console.log(`${this.tree[i].name} || Height: ${this.tree[i].height.toFixed(1)} || Mature Age: ${this.tree[i].matureAge} || Health Status: ${this.tree[i].healthStatus}`)
            }
        }
    }

    showDeadTrees() {
        console.log('---------DEAD TREES-----------')
        for(let i = 0; i < this.tree.length; i++) {
            if(this.tree[i].healthStatus == false) {
                console.log(`${this.tree[i].name} || Height: ${this.tree[i].height.toFixed(1)} || Mature Age: ${this.tree[i].matureAge} || Health Status: ${this.tree[i].healthStatus}`)
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

// contoh untuk Dead Trees
grove.inputTree("MangoTree", 30, 12, 7, true)

// // next year
grove.nextYear()

// // show trees ages
grove.showAges()

// // show trees
grove.showTrees()

// // show trees
grove.showMatureTrees()

// // show trees
grove.showDeadTrees()
