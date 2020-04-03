const MangoTree = require('./tree/mango_tree');
const AppleTree = require('./tree/apple_tree');
const PearTree = require('./tree/pear_tree');
class TreeGrove {
    constructor(){
        this.grove = []
    }
    
    inputTree(treeName, age, height, mature, health) {
        if(treeName === 'MangoTree') {
           return this.grove.push(new MangoTree(age, height, mature, health))
        } else if(treeName === 'AppleTree') {
           return this.grove.push(new AppleTree(age, height, mature, health))
        } else if(treeName === 'PearTree') {
           return this.grove.push(new PearTree(age, height, mature, health))
        } else {
            console.log('kamu siapa ? :( ')
        }
    }
    
    nextYear() {
        for(let i = 0; i < this.grove.length; i++){
            this.grove[i].grow()
        }
        
    }

    showAges() {
        for(let i = 0; i < this.grove.length; i++){
            console.log(`${this.grove[i].name} | age: ${this.grove[i].age} years`)
        }
    }

    showTrees() {
        for(let i = 0; i < this.grove.length; i++){
            console.log(`${this.grove[i].name} | height: ${this.grove[i].height} | age: ${this.grove[i].age} | mature age: ${this.grove[i].matureAge} | health status: ${this.grove[i].healthStatus}`)
        }
    }

    showMatureTrees() {
        for(let i = 0; i < this.grove.length; i++){
            if(this.grove[i].age > this.grove[i].matureAge){
                console.log(`${this.grove[i].name} | height: ${this.grove[i].height} | age: ${this.grove[i].age} | mature age: ${this.grove[i].matureAge} | health status: ${this.grove[i].healthStatus}`)
            }
        }
    }

    showDeadTrees(){
        for(let i = 0; i < this.grove.length; i++){
            if(this.grove[i].healthStatus === false){
                console.log(`${this.grove[i].name} | height: ${this.grove[i].height} | age: ${this.grove[i].age} | mature age: ${this.grove[i].matureAge} | health status: ${this.grove[i].healthStatus}`)
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

//contoh dari slack
grove.inputTree("MangoTree", 14, 53.3, 7, true)
grove.inputTree("MangoTree", 16, 54.62, 12, true)
grove.inputTree("AppleTree", 15, 36.75, 5, false)
grove.inputTree("PearTree", 18, 66.79, 15, true)


grove.inputTree("MangoTree", 3, 1.8, 7, true)
grove.inputTree("MangoTree", 5, 2.4, 12 ,true)
grove.inputTree("AppleTree", 4, 1.2, 5, true)
grove.inputTree("PearTree", 7, 2, 15, true)

// next Year
console.log('********NEXT YEAR********')
grove.nextYear()

// show trees ages
console.log('********SHOW AGE********')
grove.showAges()

// show trees
console.log('********ALL TREES********')
grove.showTrees()

// show trees
console.log('********MATURE TREES********')
grove.showMatureTrees()

// show trees
console.log('********DEAD TREES********')
grove.showDeadTrees()
