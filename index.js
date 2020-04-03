const MangoTree = require('./fruit.js').MangoTree;
const AppleTree = require('./fruit.js').AppleTree;
const PearTree = require('./fruit.js').PearTree;

class TreeGrove {
    constructor() {
        this._trees = [];
    }

    get trees() {
        return this._trees;
    }

    set trees(val) {
        this.trees = val;
    }

    inputTree(name, age, height, mature, healthStatus) {
        let temp = [name];
        if (name == 'MangoTree') {
            temp = new MangoTree(mature, 300, 13, 16, 450);
        }
        else if (name == 'AppleTree') {
            temp = new AppleTree(mature, 300, 8, 15, 350);
        }
        else if (name == 'PearTree') {
            temp = new PearTree(mature, 300, 12, 15, 400);
        }
        temp.age = age;
        temp.height = height * 100;
        temp.healthStatus = healthStatus;
        this.trees.push([name, temp]);
        return this;
    }

    nextYear(val) {
        for (let i in this.trees) {
            if (this.trees[i][1].healthStatus !== false) {
                for (let j = 0; j < val; j++) {
                    this.trees[i][1].grow();
                }
            }
        }
        return this;
    }

    showAges() {
        for (let i in this.trees) {
            console.log(`${this.trees[i][0]} | age: ${this.trees[i][1].age} year`);
        }
    }

    showTrees() {
        console.log(`------------------ All Trees ------------------`);
        for (let i in this.trees) {
            console.log(`${this.trees[i][0]} | height: ${this.trees[i][1].height / 100} | age: ${this.trees[i][1].age} | mature age: ${this.trees[i][1].mature} | health status: ${this.trees[i][1].healthStatus}`);
        }
    }

    showMatureTrees() {
        console.log(`------------------ Mature Trees ------------------`);
        for (let i in this.trees) {
            if (this.trees[i][1].age >= this.trees[i][1].mature) {
                console.log(`${this.trees[i][0]} | height: ${this.trees[i][1].height / 100} | age: ${this.trees[i][1].age} | mature age: ${this.trees[i][1].mature} | health status: ${this.trees[i][1].healthStatus}`);
            }
        }
    }

    showDeadTrees() {
        console.log(`------------------ Dead Trees ------------------`);
        for (let i in this.trees) {
            if (this.trees[i][1].healthStatus == false) {
                console.log(`${this.trees[i][0]} | height: ${this.trees[i][1].height / 100} | age: ${this.trees[i][1].age} | mature age: ${this.trees[i][1].mature} | health status: ${this.trees[i][1].healthStatus}`);
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
grove.nextYear(10)

// show trees ages
grove.showAges()

// show trees
grove.showTrees()

// show trees
grove.showMatureTrees()

// show trees
grove.showDeadTrees()
