// console.log(process.cwd())

// di default, tanaman akan mati diumur 18 atau health status bernilai false
const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

class TreeGrove {
    constructor() {
        this.inputtree = []
    }

    inputTree(name, age, height, mature, healthStatus) {
        if (name === 'MangoTree') {
            this.inputtree.push(new MangoTree(name, age, height, mature, healthStatus))
        } else if (name === 'AppleTree') {
            this.inputtree.push(new AppleTree(name, age, height, mature, healthStatus))
        } else if (name === 'PearTree') {
            this.inputtree.push(new PearTree(name, age, height, mature, healthStatus))
        }
    }

    nextYear() {
        for (let i = 0; i < this.inputtree.length; i++) {
            // console.log(this.inputtree.length)
            this.inputtree[i].grow()
        }
    }

    showAges() {
        console.log(`<------------------------ [Trees Age] ------------------------>`)
        for (let j = 0; j < this.inputtree.length; j++) {
            console.log(`${this.inputtree[j].name} (age : ${this.inputtree[j].age})`)
        }
    }

    showTrees() {
        console.log(`\n<------------------------ [Trees List] ------------------------>`)
        for (let k = 0; k < this.inputtree.length; k++) {
            console.log(`${this.inputtree[k].name} (height : ${this.inputtree[k].height}, age : ${this.inputtree[k].age}, mature age : ${this.inputtree[k].mature}, health status : ${this.inputtree[k].healthStatus})`)
        }
    }

    showMatureTrees() {
        console.log(`\n<------------------------ [Mature Trees] ------------------------>`)
        for (let l = 0; l < this.inputtree.length; l++) {
            // console.log(this.inputtree[0].age)
            if (this.inputtree[l].age >= this.inputtree[l].mature) {
                // console.log('yesss')
                console.log(`${this.inputtree[l].name} (height : ${this.inputtree[l].height}, age : ${this.inputtree[l].age}, mature age : ${this.inputtree[l].mature}, health status : ${this.inputtree[l].healthStatus})`)
            }
        }
    }

    showDeadTrees() {
        console.log(`\n<------------------------ [Dead Trees] ------------------------>`)
        for (let m = 0; m < this.inputtree.length; m++) {
            if (!this.inputtree[m].healthStatus) {
                console.log(`${this.inputtree[m].name} (height : ${this.inputtree[m].height}, age : ${this.inputtree[m].age}, mature age : ${this.inputtree[m].mature}, health status : ${this.inputtree[m].healthStatus})`)
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
grove.inputTree("PearTree", 7, 2, 15, false)

// next year
for (let a = 0; a < 12; a++) {
    grove.nextYear()
}

// show trees
grove.showAges()

// show trees
grove.showTrees()

// show trees
grove.showMatureTrees()

// show trees
grove.showDeadTrees()