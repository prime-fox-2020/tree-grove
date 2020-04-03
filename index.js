const Fruit = require('./mango_tree.js');
const MangoTree = Fruit.MangoTree;
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

let builders  = { //link to class w/ method of inputTree
    MangoTree,
    AppleTree,
    PearTree
}

class TreeGrove {
    constructor () {
        this._trees = [];
        this.names = [];
        this.matureTrees = [];
        this.deadTrees = [];
    }

    get trees () {
        return this._trees
    }

    inputTree (tree, age, height, mature, healthStatus) {
        if (tree) {;
            let trie = new builders[tree](age, height, mature, healthStatus)
            if (trie) {
                this._trees.push(trie)
                return this;
            } else {console.log(`Maaf, jenis pohon ${tree} belum tersedia invalid.`)}
        } else {
            console.log('Maaf, input invalid.');
        }
    }

    showAges () {
        let pohon = this._trees;
        for (let i = 0; i < pohon.length; i++) {
            console.log(`${pohon[i].constructor.name} | ${pohon[i]._height} | age: ${pohon[i]._age} years | mature age: ${pohon[i].matureAge} | health status: ${pohon[i]._healthStatus} `);
        }
    }

    showDeadTrees () {
        let tumbang = this._trees;
        for (let i = 0; i < tumbang.length; i++) {
            if (!tumbang[i].healthStatus) {
                console.log(`${tumbang[i].constructor.name} | ${tumbang[i]._height} | age: ${tumbang[i]._age} years | mature age: ${tumbang[i].matureAge} | health status: ${tumbang[i]._healthStatus} `)}
        }
        return this;
    }

    showMatureTrees () { // based on google.docs
        this.matureTrees = [];
        for (let i = 0; i < this._trees.length; i++) {
            if (this.trees[i]._age >= this.trees[i].matureAge && this.trees[i]._healthStatus) {
                this.matureTrees.push(this._trees[i].constructor.name)
            }
        }
        console.log(`Pohon yang sedang berbuah: ${this.matureTrees.join(', ')}`);
        return this;
    }

    showTrees () { // based on google.docs
        let listName = []
        for (let i = 0; i < this._trees.length; i++) {
            listName.push(this._trees[i].constructor.name)
        }
        console.log(`Pohon yang ada di taman: ${listName}`);
    }
}

var grove = new TreeGrove()
grove.inputTree("MangoTree", 14, 53.7, 7, true)
grove.inputTree("MangoTree", 16, 54.62, 12 ,true)
grove.inputTree("AppleTree", 15, 36.75, 5, false)
grove.inputTree("PearTree", 18, 66.79, 15, true)

console.log(`\n`)
grove.showAges() // show trees ages
console.log(`---------------------- All Trees -----------------------`)
grove.showAges() // show trees ages
console.log(`---------------------- Mature Trees -----------------------`)
grove.showAges() // show trees ages
console.log(`---------------------- Dead Trees -----------------------`)
grove.showDeadTrees()
console.log(`\n`)
// grove.showMatureTrees() // based on google.docs
// grove.showTrees() // based on google.docs