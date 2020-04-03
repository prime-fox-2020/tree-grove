const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');
// const Test = require('./tes.js')

class TreeGrove {
    constructor (){
        this.trees = []
    }

    inputTree(name, age, height, harvestAge, healthStatus) {
        if(name === 'MangoTree') {
            this.trees.push(new MangoTree(age, height, harvestAge, healthStatus))
        }
        else if(name === 'AppleTree') {
            this.trees.push(new AppleTree(age, height, harvestAge, healthStatus))
        }
        else if(name === 'PearTree') {
            this.trees.push(new PearTree(age, height, harvestAge, healthStatus))
        }
    }

    nextYear() {
        for (let i = 0; i < this.trees.length; i++) {
            this.trees[i].grow();
        }
        return this;
    }

    showAges() {
        for (let i = 0; i < this.trees.length; i++) {
            console.log(`${this.trees[i].name} | age : ${this.trees[i].age}`)
        }
        return this;
    }

    showTrees() {
        for (let i = 0; i < this.trees.length; i++) {
            console.log(`${this.trees[i].name} | height : ${this.trees[i].height} | age : ${this.trees[i].age} | mature age : ${this.trees[i].harvestAge} | health status : ${this.trees[i].healthStatus}`)
        }
        return this;
    }

    showMatureTrees() {
        for (let i = 0; i < this.trees.length; i++) {
            if (this.trees[i].age >= this.trees[i].harvestAge) {
                console.log(`${this.trees[i].name} | height : ${this.trees[i].height} | ${this.trees[i].age} | mature age : ${this.trees[i].harvestAge} | health status : ${this.trees[i].healthStatus}`)
            }
        }
        return this;
    }

    showDeadTrees() {
        for (let i = 0; i < this.trees.length; i++) {
            if (this.trees[i].healthStatus === false) {
                console.log(`${this.trees[i].name} | height : ${this.trees[i].height} | ${this.trees[i].age} | mature age : ${this.trees[i].harvestAge} | health status : ${this.trees[i].healthStatus}`)
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
grove.inputTree("MangoTree", 13, 1.8, 7, true)
grove.inputTree("MangoTree", 15, 2.4, 12 ,true)
grove.inputTree("AppleTree", 14, 1.2, 5, true)
grove.inputTree("PearTree", 17, 2, 15, true)

// next year
grove.nextYear()

// show trees ages
grove.showAges()

// show trees
grove.showTrees()
// console.log(grove.trees)

// // show trees
grove.showMatureTrees()

// // show trees
grove.showDeadTrees()
