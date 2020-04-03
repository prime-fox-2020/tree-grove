const MangoTree = require('./source/mango/mango_tree');
const AppleTree = require('./source/apple/apple-tree');
const PearTree = require('./source/pear/pear_tree');

class TreeGrove {
    constructor(){
        this._tree = []
    }
    get tree(){
        return this._tree
    }
    set tree(arr){
        this._tree = arr
        return this
    }


    inputTree(name, age, height, matureAge, healthStatus){
        if(name === 'MangoTree') {
            this.tree.push(new MangoTree(name, age, height, matureAge, healthStatus))
        } else if(name === 'AppleTree') {
            this.tree.push(new AppleTree(name, age, height, matureAge, healthStatus))
        } else if(name === 'PearTree') {
            this.tree.push(new PearTree(name, age, height, matureAge, healthStatus))
        }
    }
    
    
    
    nextYear() {
        for(let i = 0; i < this.tree.length; i++){
            this.tree[i].grow()
        }
        
    }

    showAges() {
        for(let i = 0; i < this.tree.length; i++){
            console.log(`${this.tree[i].name} | age: ${this.tree[i].age} years`)
        }
    }

    showTrees() {
        for(let i = 0; i < this.tree.length; i++){
            console.log(`${this.tree[i].name} | height: ${this.tree[i].height} | age: ${this.tree[i].age} | mature age: ${this.tree[i].matureAge} | health status: ${this.tree[i].healthStatus}`)
        }
    }

    showMatureTrees() {
        for(let i = 0; i < this.tree.length; i++){
            if(this.tree[i].age > this.tree[i].matureAge){
                console.log(`${this.tree[i].name} | height: ${this.tree[i].height} | age: ${this.tree[i].age} | mature age: ${this.tree[i].matureAge} | health status: ${this.tree[i].healthStatus}`)
            }
        }
    }

    showDeadTrees(){
        for(let i = 0; i < this.tree.length; i++){
            if(this.tree[i].healthStatus === false){
                console.log(`${this.tree[i].name} | height: ${this.tree[i].height} | age: ${this.tree[i].age} | mature age: ${this.tree[i].matureAge} | health status: ${this.tree[i].healthStatus}`)
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
// grove.inputTree("MangoTree", 3, 1.8, 7, true)
// grove.inputTree("MangoTree", 5, 2.4, 12 ,true)
// grove.inputTree("AppleTree", 4, 1.2, 5, true)
// grove.inputTree("PearTree", 7, 2, 15, true)

grove.inputTree("MangoTree", 13, 53.3, 7, true)
grove.inputTree("MangoTree", 16, 54.62, 12, true)
grove.inputTree("AppleTree", 15, 36.75, 5, false)
grove.inputTree("PearTree", 18, 66.79, 15, true)

// next year
grove.nextYear()

// show trees ages
grove.showAges()

// show trees
console.log('----------------- All Trees -----------------');

grove.showTrees()

// show trees
console.log('----------------- Mature Trees -----------------');

grove.showMatureTrees()

// show trees
console.log('----------------- Dead Trees -----------------');

grove.showDeadTrees()
