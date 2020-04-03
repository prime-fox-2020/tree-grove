const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

class TreeGrove {
    constructor() {
        this.grove = []
    }

    inputTree(name, age, height, matureAge, status) {
        switch (name) {
            case "MangoTree":
                // new MangoTree(age, height, matureAge, status)
                this.grove.push(new MangoTree(name, age, height, matureAge, status))
                // return this.mango
                break
            case "AppleTree":
                // new AppleTree(age, height, matureAge, status)
                this.grove.push(new AppleTree(name, age, height, matureAge, status))
                // return this.apple
                break
            case "PearTree":
                // new PearTree(age, height, matureAge, status)
                this.grove.push(new PearTree(name, age, height, matureAge, status))
                // return this.pear
                break
            default:
                console.log(`Sorry your ${name} not produce`);
                break;
        }
    }

    nextYear() {
        // console.log('\n===== This Next Year =====');
        for (let i = 0; i < this.grove.length; i++) {
            this.grove[i].grow()
        }
        // console.log(this.grove);
    }

    showAges() {
        console.log('\n===== This Age =====');
        for (let i = 0; i < this.grove.length; i++) {
            console.log(`${this.grove[i].name} | age : ${this.grove[i].age} year`);
        }
    }

    showTrees() {
        console.log('\n===== All Tree =====');
        for (let i = 0; i < this.grove.length; i++) {
            console.log(`${this.grove[i].name} | height : ${this.grove[i].height} | age : ${this.grove[i].age} | mature age : ${this.grove[i].matureAge} | health status : ${this.grove[i].healthStatus}`);
        }
    }

    showMatureTrees() {
        console.log('\n===== Show Mature Age =====');
        for (let i = 0; i < this.grove.length; i++) {
            this.grove[i].produce()
            if (this.grove[i].fruits.length > 0) {
                console.log(`${this.grove[i].name} | height : ${this.grove[i].height} | age : ${this.grove[i].age} | mature age : ${this.grove[i].matureAge} | health status : ${this.grove[i].healthStatus}`);
            }

            //bisa juga di check dengan this.age> this.matureAge
        }
    }
    
    showDeadTrees() {
        console.log('\n===== Show Dead Trees =====');
        for (let i = 0; i < this.grove.length; i++) {
            if (this.grove[i].healthStatus == false) {
                console.log(`${this.grove[i].name} | height : ${this.grove[i].height} | age : ${this.grove[i].age} | mature age : ${this.grove[i].matureAge} | health status : ${this.grove[i].healthStatus}`);
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

//check Show Mature Age case
grove.inputTree("AppleTree", 8, 1.2, 5, true)

//check Show Dead Tree case
grove.inputTree("AppleTree", 22, 1.2, 5, true)

console.clear();
// console.log('grove: ', grove);

// next year
grove.nextYear()

// show trees ages
grove.showAges()

// // show trees
grove.showTrees()

// // show trees
grove.showMatureTrees()

// // show trees
grove.showDeadTrees()
