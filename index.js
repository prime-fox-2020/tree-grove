
const MangoTree = require("./mango_tree.js");
const AppleTree = require("./apple_tree.js");
const PearTree = require("./pear_tree.js");

class TreeGrove {
    constructor() {
        this.tree = [];
    }

    inputTree(name, age, height, matureage, healthstatus) {
        if (name === "MangoTree") {
            this.tree.push(new MangoTree(name, age, height, matureage, healthstatus));
        } else if (name === "AppleTree") {
            this.tree.push(new AppleTree(name, age, height, matureage, healthstatus));
        } else if (name === "PearTree") {
            this.tree.push(new PearTree(name, age, height, matureage, healthstatus));
        }
    }

    showAges() {
        console.log('------------ Age Tree ----------');
        for (let i = 0; i < this.tree.length; i++) {
            console.log(`${this.tree[i].name}| age: ${this.tree[i].age}`);
        }
    }

    showTrees() {
        console.log('-------------- All Trees ----------');
        for (let i = 0; i < this.tree.length; i++) {
            console.log(`${this.tree[i].name} | height: ${this.tree[i].height} | age: ${this.tree[i].age} | mature age: ${this.tree[i].matureage} | health status: ${this.tree[i].healthstatus}`);
        }
    }

    showMatureTrees() {
        console.log('-------------- Mature Trees ----------');
        for (let i = 0; i < this.tree.length; i++) {
            console.log(`${this.tree[i].name} | height: ${this.tree[i].height} | age: ${this.tree[i].age} | mature age: ${this.tree[i].matureage} | health status: ${this.tree[i].healthstatus}`);
        }
    }

    showDeadTrees() {
        console.log('-------------- Dead Trees ----------');
        for (let i = 0; i < this.tree.length; i++) {
            if (this.tree[i].healthstatus === false) {
                console.log(`${this.tree[i].name} | height: ${this.tree[i].height} | age: ${this.tree[i].age} | mature age: ${this.tree[i].matureage} | health status: ${this.tree[i].healthstatus}`);
            }
        }
    }

    nextYear() {
        for (let i = 0; i < this.tree.length; i++) {
            this.tree[i].grow();
            console.log(`the next year age is ${this.tree[i].age + 1}`);
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
grove.inputTree("AppleTree", 4, 1.2, 5, false)
grove.inputTree("PearTree", 7, 2, 15, true)

// next year
// grove.nextYear()

// show trees ages
grove.showAges()

// show trees
grove.showTrees()

// show trees
grove.showMatureTrees()

// show trees
grove.showDeadTrees();
// console.log(grove);