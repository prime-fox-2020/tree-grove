const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

class TreeGrove {
    constructor() {
        this._tree = []
    }

    get tree() {
        return this._tree
    }
    set tree(param) {
        this._tree = param
    }

    inputTree(name, age, height, matureAge, healthStatus) {
        if (name === 'MangoTree') {
            this.tree.push(new MangoTree(age, height, matureAge, healthStatus, name))
        } else if (name === 'AppleTree') {
            this.tree.push(new AppleTree(age, height, matureAge, healthStatus, name))
        } else if (name === 'PearTree') [
            this.tree.push(new PearTree(age, height, matureAge, healthStatus, name))
        ]
    }

    nextYear() {
        for (let i = 0; i < this.tree.length; i++) {
            if (this.tree[i].age >= this.tree[i].matureAge + 5) {
                this.tree[i].healthStatus = false
            }
            for (let key in this.tree[i]) {
                if (this.tree[i][key] == true) {
                    this.tree[i].grow()
                }
            }
        }

    }

    showAges() {
        console.log(`------------------Tree's Ages------------------`)
        for (let i = 0; i < this.tree.length; i++) {
            for (let key in this.tree[i]) {
                if (this.tree[i][key] == true) {
                    console.log(`${this.tree[i].fruits} | age : ${this.tree[i].age} years`)
                }
            }
        }
    }

    showTrees() {
        console.log(`------------------All Trees------------------`)
        for (let i = 0; i < this.tree.length; i++) {
            for (let key in this.tree[i]) {
                if (this.tree[i][key] == true) {
                    console.log(`${this.tree[i].fruits} | height : ${this.tree[i].height} | age : ${this.tree[i].age} years | mature age : ${this.tree[i].matureAge}| health status : ${this.tree[i].healthStatus}`)
                }
            }
        }
    }

    showMatureTrees() {
        console.log(`------------------Mature Trees------------------`)
        for (let i = 0; i < this.tree.length; i++) {
            if (this.tree[i].age >= this.tree[i].matureAge) {
                console.log(`${this.tree[i].fruits} | height : ${this.tree[i].height} | age : ${this.tree[i].age} years | mature age : ${this.tree[i].matureAge}| health status : ${this.tree[i].healthStatus}`)
            }
        }
    }

    showDeadTrees() {
        console.log(`------------------Dead Trees------------------`)
        for (let i = 0; i < this.tree.length; i++) {
            if (this.tree[i].healthStatus === false) {
                console.log(`${this.tree[i].fruits} | height : ${this.tree[i].height} | age : ${this.tree[i].age} years | mature age : ${this.tree[i].matureAge}| health status : ${this.tree[i].healthStatus}`)
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
grove.inputTree("MangoTree", 5, 2.4, 12, true)
grove.inputTree("AppleTree", 4, 1.2, 5, true)
grove.inputTree("PearTree", 7, 2, 15, true)

// next year
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()
grove.nextYear()

// show trees ages
grove.showAges()

// show trees
grove.showTrees()

// show trees
grove.showMatureTrees()

// show trees
grove.showDeadTrees()
