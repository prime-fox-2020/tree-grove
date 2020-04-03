const MangoTree = require('./mango_tree');
const AppleTree = require('./apple_tree');
const PearTree = require('./pear_tree');


class TreeGrove {
constructor(){
    this.list=[]
}

inputTree(name, age, height, mature, healthStatus){
    if(name==='MangoTree'){
        this.list.push(new MangoTree(name,age, height, mature, healthStatus))
    }else if(name==='AppleTree'){
        this.list.push(new AppleTree(name,age, height, mature, healthStatus))
    }else if(name==='PearTree'){
        this.list.push(new PearTree(name,age, height, mature, healthStatus))
    }
    return this
}

nextYear(){
    for (let j = 0; j <=10; j++) {
        for (let i = 0; i < this.list.length; i++) {
            this.list[i].grow()
        }
    }
}
showAges(){
    for (let i = 0; i < this.list.length; i++) {
        console.log(`${this.list[i].name} | age : ${this.list[i].age} years`)
    }
}
showTrees(){
    for (let i = 0; i < this.list.length; i++) {
        console.log(`${this.list[i].name} | height : ${this.list[i].height} | age : ${this.list[i].age} | mature: ${this.list[i].mature} | health status : ${this.list[i].healthStatus} `)
    }
}
showMatureTrees(){
    for (let i = 0; i < this.list.length; i++) {
        console.log(`${this.list[i].name} | height : ${this.list[i].height} | age : ${this.list[i].age} | mature age: ${this.list[i].mature} | health status: ${this.list[i].healthStatus}`)
    }

}
showDeadTrees(){
    for(let i = 0; i < this.list.length; i++){
        if(this.list[i].healthStatus == false){
            console.log(`${this.list[i].name} | height : ${this.list[i].height} | age : ${this.list[i].age} | mature age: ${this.list[i].mature} | health status: ${this.list[i].healthStatus}`)
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

grove.nextYear()

// show trees ages
grove.showAges()

// show trees
console.log('--------------------- All Trees --------------------')
grove.showTrees()

// show trees
console.log('-------------------- Mature Trees --------------------')
grove.showMatureTrees()

// show trees
console.log('-------------------- Dead Trees --------------------')
grove.showDeadTrees()
