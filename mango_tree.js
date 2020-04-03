let fruitTree = require('./fruit_tree.js')

class MangoTree extends fruitTree {
    constructor(treeName,treeAge,treeHeight,treeMatureAge,treeStatus) {
        super(treeName,treeAge,treeHeight,treeMatureAge,treeStatus)
    }
    grow() {
        super.grow()
    }
    produceMangoes() {
        super.produceFruit()

    }

    harvest() {
        super.harvest()
    }
}


// let mangoTree = new MangoTree
// console.log(' Your Mango Tree is Alive!')
// do {
//   mangoTree.grow();
//   mangoTree.produceFruit();
//   mangoTree.harvest();
//   console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height}| Fruits harvested = ${mangoTree.harvested}`)
// } while (mangoTree.healthStatus != false)
// console.log('Sadly, your Mango Tree has died :(')
  
module.exports = MangoTree
