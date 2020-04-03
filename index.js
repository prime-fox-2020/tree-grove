const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

class TreeGrove {
    constructor() {
        this._array = []
    }

    get array() {
        return this._array
    }

    set array(arr) {
        this._array = arr
    }

    inputTree(type, age, height, mature, healthStatus) {
        if (type == "MangoTree") {
            this._array.push(new MangoTree(age, height, mature, healthStatus))
        } else if (type == "AppleTree") {
            this._array.push(new AppleTree(age, height, mature, healthStatus))
        } else if (type == "PearTree") {
            this._array.push(new PearTree(age, height, mature, healthStatus))
        }
    }

    nextYear() {
        for (const tree of this._array) {
            tree.grow()
        }
    }

    showAges() {
        let str = ""
        for (let i = 0; i < this._array.length; i++) {
            str += ` ${this._array[i].constructor.name} | age: ${this._array[i].age} years old.`
            if (this._array.length - 1 !== i) {
                str += `\n`
            }
        }
        console.log(str)
    }

    showTrees() {
        console.log("----------------- All Trees -----------------")
        let str = ""
        for (let i = 0; i < this._array.length; i++) {
            str += ` ${this._array[i].constructor.name} | height: ${this._array[i].height} | age: ${this._array[i].age} | mature age:  ${this._array[i]._matureAge} | health status:  ${this._array[i].healthStatus}.`
            if (this._array.length - 1 !== i) {
                str += `\n`
            }
        }
        console.log(str)
    }

    showMatureTrees() {
        console.log("----------------- Mature Trees -----------------")
        let str = ""
        for (let i = 0; i < this._array.length; i++) {
            if (this._array[i].age >= this._array[i]._matureAge) {
                str += ` ${this._array[i].constructor.name} | height: ${this._array[i].height} | age: ${this._array[i].age} | mature age:  ${this._array[i]._matureAge} | health status:  ${this._array[i].healthStatus}.`
                if (this._array.length - 1 !== i) {
                    str += `\n`
                }
            }
        }
        console.log(str)
    }

    showDeadTrees() {
        console.log("----------------- Dead Trees -----------------")
        let str = ""
        for (let i = 0; i < this._array.length; i++) {
            if (this._array[i].healthStatus == false) {
                str += ` ${this._array[i].constructor.name} | height: ${this._array[i].height} | age: ${this._array[i].age} | mature age:  ${this._array[i]._matureAge} | health status:  ${this._array[i].healthStatus}.`
                if (this._array.length - 1 !== i) {
                    str += `\n`
                }
            }
        }
        console.log(str)
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
// show trees ages
grove.showAges()

// show trees
grove.showTrees()

// show trees
grove.showMatureTrees()

// show trees
grove.showDeadTrees()
