const MangoTree = require('./mango_tree.js')
const AppleTree = require('./apple_tree.js')
const PearTree = require('./pear_tree.js')

class TreeGrove {
    constructor(){
        this._trees = []
    }

    //setter&getter
    get trees(){return this._trees}
    set trees(p){this._trees=p}


    inputTree(typeOfFruit, age, height, matureAge, healthStatus){
        switch (typeOfFruit) {
            case 'MangoTree':
                this.trees.push(new MangoTree(null, age, height, matureAge, healthStatus))
                break;
            case 'AppleTree':
                this.trees.push(new AppleTree(null, age, height, matureAge, healthStatus))
                break;
            case 'PearTree':
                this.trees.push(new PearTree(null, age, height, matureAge, healthStatus))
                break;    
        }
    }

    nextYear(){
        for (let i = 0; i < this.trees.length; i++) {
            this.trees[i].grow()
        }
    }

    showAges(){
        console.log(`----------------- Age of Trees -----------------`)
        for (let i = 0; i < this.trees.length; i++) {
            console.log(`${this.trees[i].typeOfFruit} Tree | age: ${this.trees[i].age} years`)
        }
    }

    showTrees(){
        console.log(`----------------- All Trees -----------------`)
        for (let i = 0; i < this.trees.length; i++) {
            console.log(`${this.trees[i].typeOfFruit} Tree | height: ${this.trees[i].height} | age: ${this.trees[i].age} years | mature age: ${this.trees[i].matureAge} years | health status: ${this.trees[i].healthStatus}`)
        }
    }

    showMatureTrees(){
        console.log(`----------------- Mature Trees -----------------`)
        let matureTrees = []
        for (let i = 0; i < this.trees.length; i++) {
            if(this.trees[i].age >= this.trees[i].matureAge){
                matureTrees.push(this.trees[i])
            }
        }

        if(matureTrees.length === 0){
            console.log(`There is no mature tree`)
        }else{
            for(let i = 0; i < matureTrees.length; i++){
                console.log(`${this.trees[i].typeOfFruit} Tree | height: ${this.trees[i].height} | age: ${this.trees[i].age} years | mature age: ${this.trees[i].matureAge} years | health status: ${this.trees[i].healthStatus}`)
            }
        }
    }

    showDeadTrees(){
        console.log(`----------------- Dead Trees -----------------`)
        let deadTrees = []
        for (let i = 0; i < this.trees.length; i++) {
            if(this.trees[i].age >= this.trees[i].deadAt){
                deadTrees.push(this.trees[i])
            }
        }

        if(deadTrees.length === 0){
            console.log(`There is no dead tree`)
        }else{
            for(let i = 0; i < deadTrees.length; i++){
                console.log(`${this.trees[i].typeOfFruit} Tree | height: ${this.trees[i].height} | age: ${this.trees[i].age} years | mature age: ${this.trees[i].matureAge} years | health status: ${this.trees[i].healthStatus}`)
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

// // show trees
grove.showDeadTrees()

//expectation dari mas yusuf
console.log(`======== EXPECTATION ========`)
var expectedGrove = new TreeGrove()
expectedGrove.inputTree("MangoTree", 14, 53.7, 14, true)
expectedGrove.inputTree("MangoTree", 16, 54.62, 16 ,true)
expectedGrove.inputTree("AppleTree", 15, 36.75, 15, false)
expectedGrove.inputTree("PearTree", 18, 66.79, 18, true)
expectedGrove.showAges()
expectedGrove.showTrees()
expectedGrove.showMatureTrees()
expectedGrove.showDeadTrees()