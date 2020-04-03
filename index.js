const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

class TreeGrove {
    constructor(){
        this._tree = []
    }
    get tree(){
        return this._tree
    }
    inputTree(name,age,height,matureAge,healthStatus,limitYear){
        if(name === 'MangoTree') this._tree.push(new MangoTree(name,age,height,matureAge,healthStatus,limitYear))
        else if(name === 'AppleTree') this._tree.push(new AppleTree(name,age,height,matureAge,healthStatus,limitYear))
        else if(name === 'PearTree') this._tree.push(new PearTree(name,age,height,matureAge,healthStatus,limitYear))
    }
    
    nextYear() {
        for (let i = 0; i < this._tree.length; i++) {
            this._tree[i].grow()
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
grove.inputTree("MangoTree", 3, 1.8, 7, true,14)
grove.inputTree("MangoTree", 5, 2.4, 12 ,true,16)
grove.inputTree("AppleTree", 4, 1.2, 5, true,15)
grove.inputTree("PearTree", 7, 2, 15, true,18)


// show trees ages
grove.showAges()

// show trees
grove.showTrees()

// next year
grove.nextYear()

// show trees
grove.showMatureTrees()

// show trees
grove.showDeadTrees()

