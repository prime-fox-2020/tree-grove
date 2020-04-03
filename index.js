const MangoTree = require('./mangoTree.js');
const AppleTree = require('./appleTree.js');
const PearTree = require('./pearTree.js');

class TreeGrove {
    constructor(){
        this._treeList = []
    }

    get treeList(){
        return this._treeList
    }

    inputTree(name, age, height, matureAge, healthStatus){
        if (name === 'MangoTree'){
            this._treeList.push(new MangoTree(name, age, height, matureAge, healthStatus))
        } else if (name === 'AppleTree'){
            this._treeList.push(new AppleTree(name, age, height, matureAge, healthStatus))
        } else if (name === 'PearTree'){
            this._treeList.push(new PearTree(name, age, height, matureAge, healthStatus))
        }
    }

    nextYear(){
        // invoke fungsi grow yang ada di setiap file
        for (let i = 0; i<this._treeList.length; i++){
            this._treeList[i].grow()
        }
    }

    showAges(){
        // print nama pohon dan umur maksimum setiap pohon
        // mature tidak sama dengan umur maksimum
        console.log(`------------------------SHOW TREE AGES----------------`)
        for (let i = 0; i<this._treeList.length; i++){
            console.log(`${this._treeList[i].name} | age : ${this._treeList[i].age}`)
        }
    }

    showTrees(){
        // kalo this healthstatus = true
        // print poon yg idup
        console.log(`-------------------------ALL TREES-------------------`)
        for (let i = 0; i<this._treeList.length; i++){
           console.log(`${this._treeList[i].name} | height : ${this._treeList[i].height} | age : ${this._treeList[i].age} | mature age : ${this._treeList[i].matureAge} | health status : ${this._treeList[i].healthStatus}`)
        }
    }

    showMatureTrees(){
        // kalo ada pohon yang umurnya sudah melewati batas mature
        console.log(`--------------------SHOW MATURE TREES----------------`)
        for (let i = 0; i<this._treeList.length; i++){
            if(this._treeList[i].age >= this._treeList[i].matureAge){
                console.log(`${this._treeList[i].name} | height : ${this._treeList[i].height} | age : ${this._treeList[i].age} | mature age : ${this._treeList[i].matureAge} | health status : ${this._treeList[i].healthStatus}`)
            }
        }
    }
    
    showDeadTrees(){
        // pokoknya kalo this healthstatus = false
        console.log(`--------------------SHOW DEAD TREES-------------------`)
        for (let i = 0; i<this._treeList.length; i++){
            if(this._treeList[i].healthStatus === false){
                console.log(`${this._treeList[i].name} | height : ${this._treeList[i].height} | age : ${this._treeList[i].age} | mature age : ${this._treeList[i].matureAge} | health status : ${this._treeList[i].healthStatus}`)
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
for (let a= 0; a<12; a++){
    grove.nextYear()
}

grove.showAges()


// show trees
grove.showTrees()

// show trees
grove.showMatureTrees()

// show trees
grove.showDeadTrees()
