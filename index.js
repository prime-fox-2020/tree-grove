'use strict'
const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js')
const PearTree = require('./pear_tree.js');

// const mangoTree = new MangoTree
// const appleTree = new AppleTree
// const pearTree = new PearTree
// console.log(mangoTree)
class TreeGrove {
    constructor() {
        this.treeInfo=[]

    }


    inputTree(treeName, treeAge, treeHeight, treeMatureAge, treeHealth) {
        if(treeName == 'AppleTree'){
            this.treeInfo.push(new AppleTree(treeName,treeAge,treeHeight,treeMatureAge,treeHealth))
        }else if(treeName == 'MangoTree'){
            this.treeInfo.push(new MangoTree(treeName,treeAge,treeHeight,treeMatureAge,treeHealth))
        }else if(treeName == 'PearTree'){
            this.treeInfo.push(new PearTree(treeName,treeAge,treeHeight,treeMatureAge,treeHealth))
        }
    }
    nextYear() {
        //randomizer umur mati 
        //umur bertambah 
        for (var i = 0; i < this.treeInfo.length; i++) {
            this.treeInfo[i]._age++
            let treeGrowth = Math.round(Math.random() * 10) / 10
            this.treeInfo[i]._height += treeGrowth
        }
        //pertambahan tinggi random 
    }
    showAges() {
        for (var i = 0; i < this.treeInfo.length; i++) {
            console.log(`${this.treeInfo[i].treeName} | Age : ${this.treeInfo[i]._age}`)
        }
    }
    showTrees() {
        for (var i = 0; i < this.treeInfo.length; i++) {
            console.log(`${this.treeInfo[i].treeName} | Height : ${this.treeInfo[i]._height} | Age: ${this.treeInfo[i]._age} | Mature Age : ${this.treeInfo[i]._matureAge} | Health : ${this.treeInfo[i]._healthStatus}`)
        }
    }
    showMatureTrees() {
        for (var i = 0; i < this.treeInfo.length; i++) {
            if (this.treeInfo[i]._matureAge <= this.treeInfo[i]._age) {
                console.log(`${this.treeInfo[i].treeName} | Height : ${this.treeInfo[i]._height} | Age: ${this.treeInfo[i]._age} | Mature Age : ${this.treeInfo[i]._matureAge} | Health : ${this.treeInfo[i]._healthStatus}`)
            }
        }
    }
    showDeadTrees() {
        for (var i = 0; i < this.treeInfo.length; i++) {
            if (this.treeInfo[i]._healthStatus === false) {
                console.log(`${this.treeInfo[i].treeName} | Height : ${this.treeInfo[i]._height} | Age: ${this.treeInfo[i]._age} | Health : ${this.treeInfo[i]._healthStatus}`)
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
// console.log(grove)
grove.inputTree("MangoTree", 3, 1.8, 7, true)
grove.inputTree("MangoTree", 5, 2.4, 12, true)
grove.inputTree("AppleTree", 4, 1.2, 5, true)
grove.inputTree("PearTree", 7, 2, 15, false)

console.log(grove)
// grove.nextYear()
// console.log(grove)
// show trees ages

// for (var i = 0; i <= 5; i++) {
    grove.nextYear()
    grove.showAges()
    console.log('---------------------ALL TREES-------------------------')
    // show trees
    grove.showTrees()
    console.log('--------------------MATURE TREES-----------------------')
    // show trees
    grove.showMatureTrees()
    console.log('---------------------DEAD TREES-------------------------')
    // show trees
    grove.showDeadTrees()
    console.log('\n')

// }
