let fruitTree = require('./fruit_tree.js')


class AppleTree extends fruitTree {
    constructor(treeName,treeAge,treeHeight,treeMatureAge,treeStatus) {
        super(treeName,treeAge,treeHeight,treeMatureAge,treeStatus)
        this.increasedHeight = 0
        this.maxTreeAge = Math.round((Math.random() * (50 - 20) + 20)) // umur pohon apel bisa 20 - 50 thn

    }
    grow() {
        super.grow()
    }

    produceApples() {
        super.produceFruit()
    }

    harvest() {
        super.harvest()
    }
}




// let appleTree = new AppleTree
// console.log(' Your Apple Tree is Alive!')
// do {
//     appleTree.grow();
//     appleTree.produceFruit();
//     appleTree.harvest();
//     console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height}| Fruits harvested = ${appleTree.harvested}`)
// } while (appleTree.healthStatus != false)
// console.log('Sadly, your Apple Tree has died :(')

module.exports = AppleTree