const MangoTree = require('./trees/mango_tree.js');
const AppleTree = require('./trees/apple_tree.js');
const PearTree = require('./trees/pear_tree.js');

class TreeGrove {
    constructor(){
        this.garden=[]
    }
    inputTree(name,age,height,matureAge,healthStatus){
    // memasukan data pohon saat ini
    if(name == "MangoTree"){
        this.garden.push(new MangoTree(name,age,height,matureAge,healthStatus))
        } else if (name == "AppleTree"){
        this.garden.push(new AppleTree(name,age,height,matureAge,healthStatus))
        } else if (name == "PearTree"){
        this.garden.push(new PearTree(name,age,height,matureAge,healthStatus))
        }
    }

    showAges(){
        for(var i in this.garden){
            let name = `${this.garden[i].Name} ${this.garden[i].age}`
            console.log(name)
        }
    }

    showTrees() {

        for (let i in this.garden) {
            let name = []
            name.push(`${this.garden[i].Name} ada di taman` );
        
            console.log(name);
        }
    
        
      }

    showMatureTrees() {
    
    for (let i in this.garden) {
        if (this.garden[i].age >= this.garden[i].matureAge) {
            let name = this.garden[i].Name;
            let age = this.garden[i].age;
            console.log(name,age)
        }else{
            let name = this.garden[i].Name;
            let age = this.garden[i].age;
            console.log(`${name}, masih bocah`)
        }
          }
        }
    

    showDeadTrees(){
    // // semua nama pohon yang matik

    for (let i in this.garden) {
        if (this.garden[i].age >= this.garden[i].limitAge) {
            let name = this.garden[i].Name;
            let age = this.garden[i].age;
            console.log(`yang ko-it ${name},umurnya masih ${age}`)
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






// // next year
// grove.nextYear()

// show trees ages
grove.showAges()

// // show trees
grove.showTrees()

// // show trees
grove.showMatureTrees()

// // show trees
grove.showDeadTrees()

// console.log(grove)
// // modulemodule