const { FruitTree, Fruit } = require("./fruit_Tree.js");

class MangoTree extends FruitTree {
    constructor(name, age, height, matureage, healthstatus) {
        super(name, age, height, matureage, healthstatus);
        this.healthstatus = healthstatus;
    }
}

// let test = new MangoTree('a', 6, 14, 5, true)
// console.log(test);

module.exports = MangoTree;