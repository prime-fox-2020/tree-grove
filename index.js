const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

class TreeGrove {
    constructor(){
        this._tree = []
    }
    get tree(){
        return this._tree
    }
    inputTree(name,age,height,matureAge,healthStatus){
        if(name === 'MangoTree') this._tree.push(new MangoTree(name,age,height,matureAge,healthStatus))
        else if(name === 'AppleTree') this._tree.push(new AppleTree(name,age,height,matureAge,healthStatus))
        else if(name === 'PearTree') this._tree.push(new PearTree(name,age,height,matureAge,healthStatus))
    }
    nextYear(){
        for(let i = 0 ; i< this.tree.length;i++){
            this.tree[i]._age +=1;
           }
    }
    showAges(){
        let hasil = []
        for(let i = 0 ; i< this.tree.length;i++){
            hasil.push(this.tree[i].age);
        }
        console.log(hasil);
    }
    showTrees(){
        let hasil = []
        for(let i = 0; i< this.tree.length; i++){
            hasil.push(this.tree[i].name)
        }
        console.log(hasil);
    }
    showMatureTrees(){
        let hasil = []
        for(let i = 0 ;i < this.tree.length;i++){
            if(this.tree[i].healthStatus != false && this.tree[i].age>=this.tree[i].mature){
                hasil.push(this.tree[i].name)
            }
        }
        console.log(hasil)
    }
    showDeadTrees(){
        let hasil = []
        for(let i = 0 ;i < this.tree.length;i++){
            if(this.tree[i].healthStatus === false){
                hasil.push(this.tree[i].name)
            }
        }
        // console.log(this.tree,"---------------------")
        console.log(hasil)
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
grove.showTrees()

// show trees
grove.showMatureTrees()

// show trees
grove.showDeadTrees()

