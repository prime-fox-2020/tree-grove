const { FruitTree, Fruit } = require('./fruit_Tree.js')

class AppleTree extends FruitTree {
    constructor(name, age, height, matureage, healthstatus) {
        super(name, age, height, matureage, healthstatus)
        this.name = name
        this.healthstatus = healthstatus
    }
}

// let test = new AppleTree('a', 6, 14, 5, true)
// console.log(test);

module.exports = AppleTree