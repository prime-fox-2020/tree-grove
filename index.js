const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

"use strict"

class TreeGrove {
    constructor(){
        this.trees = []
    }

    inputTree(name, firstAge, firstHeight, matureAge, healthStatus){
        if(name === 'MangoTree'){
            let tree = new MangoTree(firstAge, firstHeight, 0, healthStatus, null, matureAge)
            this.trees.push(tree)    
        }else if(name === 'AppleTree'){
            let tree = new AppleTree(firstAge, firstHeight, 0, healthStatus, null, matureAge)
            this.trees.push(tree)   
        }else if(name === 'PearTree'){
            let tree = new PearTree(firstAge, firstHeight, 0, healthStatus, null, matureAge)
            this.trees.push(tree)   
        }
    }

    nextYear(){
        this.trees.forEach(el => {
            let years = 1;
            if(el.name === 'Mango Tree'){
                let mangoTree = new MangoTree(el._age, el._firstHeight, 0, el._healthStatus, null, el.matureAge);
                do {
                    mangoTree.grow();
                    mangoTree.produce();
                    if(years === 8){
                        el._age = mangoTree.age // means next 8 years 
                        el._firstHeight = mangoTree.height.toFixed(2)
                    }
                    years++;
                } while (mangoTree.healthStatus != false);
            } else if(el.name === 'Apple Tree'){
                let appleTree = new AppleTree(el._age, el._firstHeight, 0, el._healthStatus, null, el.matureAge);
                do {
                    appleTree.grow();
                    appleTree.produce();
                    if(years === 8){
                        el._age = appleTree.age // means next 8 years 
                        el._firstHeight = appleTree.height.toFixed(2)
                    }
                    years++;
                } while (appleTree.healthStatus != false);
            } else if(el.name === 'Pear Tree'){
                let pearTree = new PearTree(el._age, el._firstHeight, 0, el._healthStatus, null, el.matureAge);
                do {
                    pearTree.grow();
                    pearTree.produce();
                    if(years === 8){
                        el._age = pearTree.age; // means next 8 years 
                        el._firstHeight = pearTree.height.toFixed(2);
                    }
                    years++;
                } while (pearTree.healthStatus != false);
            }
        });
    }

    showAges(){
        this.trees.forEach(el => {
            console.log(`${el.name} | age : ${el._age} years`);
        });
    }

    showTrees(){
        console.log('----------------- All Trees -----------------');
        this.trees.forEach(el => {
            console.log(`${el.name} | Height: ${el._firstHeight} | Age: ${el._age} | Mature Age: ${el.matureAge} | Health Status: ${el._healthStatus}`);
        });
    }   

    showMatureTrees(){
        console.log('----------------- Mature Trees -----------------');
        this.trees.forEach(el => {
            if(el._healthStatus){
                console.log(`${el.name} | Height: ${el._firstHeight} | Age: ${el._age} | Mature Age: ${el.matureAge} | Health Status: ${el._healthStatus}`);
            }
        });
    }

    showDeadTrees(){
        console.log('----------------- Dead Trees -----------------');
        this.trees.forEach(el => {
            if(!el._healthStatus){
                console.log(`${el.name} | Height: ${el._firstHeight} | Age: ${el._age} | Mature Age: ${el.matureAge} | Health Status: ${el._healthStatus}`);
            }
        });
    }
}

let grove = new TreeGrove();
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
grove.showTrees()

// show trees
grove.showMatureTrees()

// show trees
grove.showDeadTrees()
