const MangoTree = require('./trees/mango-tree');
const AppleTree = require('./trees/apple-tree');
const PearTree = require('./trees/pear-tree');

class TreeGrove {
    constructor(){
        this._allTrees = []
        // this._age = age
        // this._height = height
        // this._matureAge = matureAge
        // this._healthStatus = healthStatus
    }

    get allTrees (){
        return this._allTrees
    }
    // get age (){
    //     return this._age
    // }
    // get height (){
    //     return this._height
    // }
    // get matureAge (){
    //     return this._matureAge
    // }
    // get healthStatus (){
    //     return this._healthStatus
    // }

    set allTrees (val){
        this._allTrees = val
    }
    // set age (val){
    //     this._age = val
    // }
    // set height (val){
    //     this._height = val
    // }
    // set matureAge (val){
    //     this._matureAge = val
    // }
    // get healthStatus (val){
    //     this._healthStatus = val
    // }

    inputTree(name, age, height, matureAge, healthStatus){
        if(name === "MangoTree"){
            let temp = []
            temp.push(name)
            temp.push(new MangoTree(age, height, healthStatus, matureAge))
            this.allTrees.push(temp)
        } else if(name === "AppleTree"){
            let temp = []
            temp.push(name)
            temp.push(new AppleTree(age, height, healthStatus, matureAge))
            this.allTrees.push(temp)
        } else if(name === "PearTree"){
            let temp = []
            temp.push(name)
            temp.push(new PearTree(age, height, healthStatus, matureAge))
            this.allTrees.push(temp)
        }
    }

    nextYear(){
        for(let a = 0; a < this.allTrees.length; a++){
            if (this.allTrees[a][1].age < this.allTrees[a][1].maxAge){
                this.allTrees[a][1].age += 1
              } else {
                this.allTrees[a][1].healthStatus = false
              }
          
              if(this.allTrees[a][1].height < this.allTrees[a][1].maxHeight){
                this.allTrees[a][1].height += Math.floor((Math.random() * 11)+ 1)/10
              } else if (this.allTrees[a][1].height > this.allTrees[a][1].maxHeight){
                this.allTrees[a][1].height = this.allTrees[a][1].maxHeight
              }
          
              if(this.allTrees[a][1].age >= this.allTrees[a][1].whenMature){
                this.allTrees[a][1].matureAge = true
              }
        }


    }

    showAges(){
        for(let a = 0; a < this.allTrees.length; a++){
            console.log(`${this.allTrees[a][0]} | age: ${this.allTrees[a][1].age} years`) //Mango Tree | age: 14 years
        }
    }

    showTrees(){
        console.log('--------------------------- All Trees ---------------------------')
        for(let a = 0; a < this.allTrees.length; a++){
            console.log(`${this.allTrees[a][0]} | height: ${this.allTrees[a][1].height} | age: ${this.allTrees[a][1].age} | mature age: ${this.allTrees[a][1].whenMature} | health status: ${this.allTrees[a][1].healthStatus}`) //Mango Tree | height: 53.7  | age: 14 | mature age: 7  | health status: true
        }
    }

    showMatureTrees(){
        console.log('--------------------------- Mature Trees ---------------------------')
        for(let a = 0; a < this.allTrees.length; a++){
            if(this.allTrees[a][1].matureAge === true){
                console.log(`${this.allTrees[a][0]} | height: ${this.allTrees[a][1].height} | age: ${this.allTrees[a][1].age} | mature age: ${this.allTrees[a][1].whenMature} | health status: ${this.allTrees[a][1].healthStatus}`) //Mango Tree | height: 53.7  | age: 14 | mature age: 7  | health status: true
            }
        }
    }

    showDeadTrees(){
        console.log('--------------------------- Dead Trees ---------------------------')
        for(let a = 0; a < this.allTrees.length; a++){
            if(this.allTrees[a][1].healthStatus === false){
                console.log(`${this.allTrees[a][0]} | height: ${this.allTrees[a][1].height} | age: ${this.allTrees[a][1].age} | mature age: ${this.allTrees[a][1].whenMature} | health status: ${this.allTrees[a][1].healthStatus}`) //Mango Tree | height: 53.7  | age: 14 | mature age: 7  | health status: true
            }
        }
    }
}

var grove = new TreeGrove()
// input your trees data !
// parameter ke-1: nama pohon
// parameter ke-2: umur pohon ketika ditanam di taman tersebut
// parameter ke-3: tinggi pohon pertama kali ketika ditanam di taman tersebut
// parameter ke-4: umur mature pohon tersebut
// parameter ke-5: healthStatus dari pohon tersebut ketika ditanam
grove.inputTree("MangoTree", 3, 1.8, 7, true)
grove.inputTree("MangoTree", 100, 2.4, 12 ,true)
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
