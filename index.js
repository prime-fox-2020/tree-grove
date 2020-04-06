const MangoTree = require('./trees/mango_tree.js');
const AppleTree = require('./trees/apple_tree.js');
const PearTree = require('./trees/pear_tree.js');

class TreeGrove {
    constructor(tree, age, heights, matureAge, healthStatus) {
        this.name = tree
        this.age = age
        this.heights = heights
        this.matureAge = matureAge
        this.healthStatus = healthStatus
        this.garden = []
    }

    inputTree(name, age, mature, heights, healthStatus) {
        switch (name){
            case 'MangoTree': this.garden.push(new MangoTree(name, age, mature, heights, healthStatus)); break;
            case 'AppleTree': this.garden.push(new AppleTree(name, age, mature, heights, healthStatus)); break;
            case 'PearTree': this.garden.push(new PearTree(name, age, mature, heights, healthStatus)); break;
        }
    }

    nextYear() {
        for (let y = 0; y < this.garden.length; y++) {
            this.garden[y].grow()
        }
    }

    showAges() {
        for (let s = 0; s < this.garden.length; s++) {
            console.log(`Name : ${this.garden[s].Name}, Age : ${this.garden[s].Age} Years`)
        }
    }

    showTrees() {
        for (let t = 0; t < this.garden.length; t++) {
            console.log(`Collection : ${this.garden[t].Name}`)
        }
    }

    showMatureTrees() {
        for (let m = 0; m < this.garden.length; m++) {
            if (this.garden[m].Age >= this.garden[m].MatureAge) {
                console.log(`Matured : ${this.garden[m].Name}`)
            }
            // console.log(this.garden)
        }
    }

    showDeadTrees() {
        for (let d = 0; d < this.garden.length; d++) {
            if (this.garden[d].Age >= this.garden[d]._maxAge) {
                console.log(`Dead Trees : ${this.garden[d].Name}`)
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

// show trees
grove.showDeadTrees()
