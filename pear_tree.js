let fruitTree = require('./fruit_tree.js')
class PearTree extends fruitTree {
    constructor(treeName,treeAge,treeHeight,treeMatureAge,treeStatus) {
        super(treeName,treeAge,treeHeight,treeMatureAge,treeStatus)
        this.maxTreeAge = Math.round((Math.random() * (15 - 10) + 10)) // umur pohon dari 10 - 15 thn 

    }
    grow() {
        super.grow()
    }
    producePear() {
        super.ProduceFruit()
    }
    harvest() {
        super.harvest()
    }
}

let pearTree = new PearTree
// console.log(' Your Pear Tree is Alive!')
// do {
//   pearTree.grow();
//   pearTree.produceFruit();
//   pearTree.harvest();
//   console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height}| Fruits harvested = ${pearTree.harvested}`)
// } while (pearTree.healthStatus != false)
// console.log('Sadly, your Pear Tree has died :(')

module.exports = PearTree