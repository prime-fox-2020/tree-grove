const MangoTree = require('./mango_tree');
const AppleTree = require('./apple_tree');
const PearTree = require('./pear_tree');
class TreeGrove {
    constructor(){
        this.treeList = []
    }
    
    inputTree(tree, age, height, mature, health){
        if(tree === 'MangoTree'){
            this.treeList.push(new MangoTree(age, height, mature, health))
        }
        else if(tree === 'AppleTree'){
            this.treeList.push(new AppleTree(age, height, mature, health))
        }
        else if(tree === 'PearTree'){
            this.treeList.push(new PearTree(age, height, mature, health))
        }
        return this
    }
    nextYear(){
        for(let i = 0; i < this.treeList.length; i++){
            this.treeList[i].grow()
        }
        return this
    }
    showAges(){
        for(let i = 0; i < this.treeList.length; i++){
            console.log(`${this.treeList[i].name} | age: ${this.treeList[i].age} years`)
        }
    }
    showTrees(){
        for(let i = 0; i < this.treeList.length; i++){
            console.log(`${this.treeList[i].name} | height: ${this.treeList[i].height} | age: ${this.treeList[i].age} | mature age: ${this.treeList[i].matureAge} | health status: ${this.treeList[i].healtyStatus}`)
        }
    }
    showMatureTrees(){
        for(let i = 0; i < this.treeList.length; i++){
            if(this.treeList[i].age > this.treeList[i].matureAge){
                console.log(`${this.treeList[i].name} | height: ${this.treeList[i].height} | age: ${this.treeList[i].age} | mature age: ${this.treeList[i].matureAge} | health status: ${this.treeList[i].healtyStatus}`)
            }
        }
    }
    showDeadTrees(){
        for(let i = 0; i < this.treeList.length; i++){
            if(this.treeList[i].healtyStatus === false){
                console.log(`${this.treeList[i].name} | height: ${this.treeList[i].height} | age: ${this.treeList[i].age} | mature age: ${this.treeList[i].matureAge} | health status: ${this.treeList[i].healtyStatus}`)
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
grove.inputTree("MangoTree", 13, 50, 7, true)
grove.inputTree("MangoTree", 15, 50, 12 ,true)
grove.inputTree("AppleTree", 14, 30, 5, true)
grove.inputTree("PearTree", 17, 60, 15, true)

// next 

//Pohon akan dianggap mati ketika usia pohon >= 10 tahun dari mature age

console.log(`\n\n -------------------- Year 1 --------------------\n`)
grove.nextYear()

// // show trees ages
console.log('----------------- Welcome to Tree Grove -----------------')
grove.showAges()

// // show trees
console.log('----------------- All Trees -----------------')
grove.showTrees()

// // show trees
console.log('----------------- Mature Trees -----------------')
grove.showMatureTrees()

// // show trees
console.log('----------------- Dead Trees -----------------')
grove.showDeadTrees()


/* checking test case year 2 with planting some new trees*/
// grove.inputTree("MangoTree", 8, 32, 10, true)
// grove.inputTree("AppleTree", 10, 37.7, 15, true)
// grove.inputTree("PearTree", 5, 25, 12, true)

// console.log(`\n\n -------------------- Year 2 --------------------\n`)
// grove.nextYear()

// // // show trees ages
// console.log('----------------- Welcome to Tree Grove -----------------')
// grove.showAges()

// // // show trees
// console.log('----------------- All Trees -----------------')
// grove.showTrees()

// // // show trees
// console.log('----------------- Mature Trees -----------------')
// grove.showMatureTrees()

// // // show trees
// console.log('----------------- Dead Trees -----------------')
grove.showDeadTrees()
