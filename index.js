const MangoTree = require('./mangoTree.js');
const AppleTree = require('./appleTree.js');
const PearTree = require('./pearTree.js');

class TreeGrove {
    constructor(){
        this._trees = [];
    }
    get trees() {return this._trees;}
    set trees(param) {this._trees = param;}

    inputTree(name = '', age = 0, height = 0, matureAge = 0, healthStatus = true, ability) {
        switch (name){
            case 'MangoTree':
                this.trees.push(new MangoTree(age, height, matureAge, healthStatus, ability));
                break;
            case 'AppleTree':
                this.trees.push(new AppleTree(age, height, matureAge, healthStatus, ability));
                break;
            case 'PearTree':
                this.trees.push(new PearTree(age, height, matureAge, healthStatus, ability));
                break;
        }
    }

    nextYear() {
        for (let tree of this.trees) {
            tree.grow();
            tree.produceFruits();
            tree.harvest();
            console.log(`${tree.fruitClass.name} Tree | age: ${tree.age} years | Height = ${tree.height} | Fruits harvested = ${tree.harvested}`);
        } 
    }

    showAges() {
        console.log("\n----------------- Trees Age -----------------");
        for (let tree of this.trees) {
            console.log(`${tree.fruitClass.name} Tree | age: ${tree.age} years`);
        }
    }

    showTrees() {
        console.log("\n----------------- All Trees -----------------");
        for (let tree of this.trees) {
            console.log(`${tree.fruitClass.name} Tree | height: ${tree.height} | age: ${tree.age} | mature age: ${tree.matureAge} | health status: ${tree.healthStatus}`);
        }
    }

    showMatureTrees() {
        console.log("\n--------------- Mature Trees ----------------");
        for (let tree of this.trees) {
            if (tree.age >= tree.matureAge) {
                console.log(`${tree.fruitClass.name} Tree | height: ${tree.height} | age: ${tree.age} | mature age: ${tree.matureAge} | health status: ${tree.healthStatus}`);
            }
        }
    }

    showDeadTrees() {
        console.log("\n---------------- Dead Trees -----------------");
        for (let tree of this.trees) {
            if (!tree.healthStatus) {
                console.log(`${tree.fruitClass.name} Tree | height: ${tree.height} | age: ${tree.age} | mature age: ${tree.matureAge} | health status: ${tree.healthStatus}`);
            }
        }
    }
}

var grove = new TreeGrove();
// // input your trees data !
// // parameter ke-1: nama pohon
// // parameter ke-2: umur pohon ketika ditanam di taman tersebut
// // pamareter ke-3: tinggi pohon pertama kali ketika ditanam di taman tersebut
// // parameter ke-4: umur mature pohon tersebut
// // parameter ke-5: healthStatus dari pohon tersebut ketika ditanam
// // parameter ke-6: special attribute dari masing-masing pohon.
grove.inputTree("MangoTree", 3, 1.8, 7, true);
grove.inputTree("MangoTree", 5, 2.4, 12, true, 10);
grove.inputTree("AppleTree", 4, 1.2, 5, true);
grove.inputTree("PearTree", 7, 2, 15, true);

// next year
for (let j = 0; j < 10; j++) {
    console.log(`\n---------------- Year ${j+1} Report -----------------`);
    grove.nextYear();
}

// show trees ages
grove.showAges()

// // show trees
grove.showTrees();

// // show trees
grove.showMatureTrees();

// // show trees
grove.showDeadTrees();