const MangoTree = require('./mango/mango_tree.js');
const AppleTree = require('./apple/apple_tree.js');
const PearTree = require('./pear/pear_tree.js');

class TreeGrove {
    constructor(){
        this._tree = []
    }

    get tree() {
        return this._tree
    }
    
    inputTree(nameOfTree, initialAge, initialHeight, matureAge, initialHealthStatus, limitYear) {
        if (nameOfTree == "MangoTree") {
            let mangoTree = new MangoTree()
            mangoTree._age = initialAge
            mangoTree._height = initialHeight
            mangoTree._matureAge = matureAge
            mangoTree._healthStatus = initialHealthStatus
            mangoTree._name = nameOfTree
            mangoTree._yearLimit = limitYear
            this._tree.push(mangoTree)
        }
        
        if (nameOfTree == "AppleTree") {
            let appleTree = new AppleTree()
            appleTree._age = initialAge
            appleTree._height = initialHeight
            appleTree._matureAge = matureAge
            appleTree._healthStatus = initialHealthStatus
            appleTree._name = nameOfTree
            appleTree._yearLimit = limitYear
            this._tree.push(appleTree)
        } 
        
        if (nameOfTree == "PearTree") {
            let pearTree = new PearTree()
            pearTree._age = initialAge
            pearTree._height = initialHeight
            pearTree._matureAge = matureAge
            pearTree._healthStatus = initialHealthStatus
            pearTree._name = nameOfTree
            pearTree._yearLimit = limitYear
            this._tree.push(pearTree)
        }
    }

    
    nextYear() {
        for (let i = 0; i < this._tree.length; i++) {
            do {
                this._tree[i].grow();
            } while (this._tree[i]._age < this._tree[i]._yearLimit)
        }        
    }
    
    showAges() {
        for (let i = 0; i < this._tree.length; i++) {
            if (this._tree[i]._name == "MangoTree") {
                console.log(`Mango Tree | age:  ${this._tree[i].age} years`)
            } else if (this._tree[i]._name == "AppleTree") {
                console.log(`Apple Tree | age:  ${this._tree[i].age} years`)
            } else if (this._tree[i]._name == "PearTree") {
                console.log(`Pear Tree | age:  ${this._tree[i].age} years`)
            }
        }
        
    }

    showTrees() {
        console.log('------------------------- All Trees -------------------------');
        for (let i = 0; i < this._tree.length; i++) {
            if (this._tree[i]._name == "MangoTree") {
                console.log(`Mango Tree | height: ${this._tree[i].height} | age:  ${this._tree[i].age} | mature age: ${this._tree[i]._matureAge} | health status: ${this._tree[i]._healthStatus}`)
            } else if (this._tree[i]._name == "AppleTree") {
                console.log(`Apple Tree | height: ${this._tree[i].height} | age:  ${this._tree[i].age} | mature age: ${this._tree[i]._matureAge} | health status: ${this._tree[i]._healthStatus}`)
            } else if (this._tree[i]._name == "PearTree") {
                console.log(`Pear Tree | height: ${this._tree[i].height} | age:  ${this._tree[i].age} | mature age: ${this._tree[i]._matureAge} | health status: ${this._tree[i]._healthStatus}`)
            }
        }
    }

    showMatureTrees() {
        console.log('------------------------- Mature Trees -------------------------');
        for (let i = 0; i < this._tree.length; i++) {
            if (this._tree[i]._age > this._tree[i]._matureAge) {
                if (this._tree[i]._name == "MangoTree") {
                    console.log(`Mango Tree | height: ${this._tree[i].height} | age:  ${this._tree[i].age} | mature age: ${this._tree[i]._matureAge} | health status: ${this._tree[i]._healthStatus}`)
                } else if (this._tree[i]._name == "AppleTree") {
                    console.log(`Apple Tree | height: ${this._tree[i].height} | age:  ${this._tree[i].age} | mature age: ${this._tree[i]._matureAge} | health status: ${this._tree[i]._healthStatus}`)
                } else if (this._tree[i]._name == "PearTree") {
                    console.log(`Pear Tree | height: ${this._tree[i].height} | age:  ${this._tree[i].age} | mature age: ${this._tree[i]._matureAge} | health status: ${this._tree[i]._healthStatus}`)
                }
            }
        }
    }

    showDeadTrees() {
        console.log('------------------------- Dead Trees -------------------------');
        for (let i = 0; i < this._tree.length; i++) {
            if (this._tree[i]._healthStatus == false) {
                if (this._tree[i]._name == "MangoTree") {
                    console.log(`Mango Tree | height: ${this._tree[i].height} | age:  ${this._tree[i].age} | mature age: ${this._tree[i]._matureAge} | health status: ${this._tree[i]._healthStatus}`)
                } else if (this._tree[i]._name == "AppleTree") {
                    console.log(`Apple Tree | height: ${this._tree[i].height} | age:  ${this._tree[i].age} | mature age: ${this._tree[i]._matureAge} | health status: ${this._tree[i]._healthStatus}`)
                } else if (this._tree[i]._name == "PearTree") {
                    console.log(`Pear Tree | height: ${this._tree[i].height} | age:  ${this._tree[i].age} | mature age: ${this._tree[i]._matureAge} | health status: ${this._tree[i]._healthStatus}`)
                }
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
grove.inputTree("MangoTree", 3, 1.8, 7, true, 14)
grove.inputTree("MangoTree", 5, 2.4, 12 ,true, 16)
grove.inputTree("AppleTree", 4, 1.2, 5, true, 15)
grove.inputTree("PearTree", 7, 2, 15, true, 18)

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
