const FruitTree = require("./fruit_tree")
const Fruit = require("./fruit")

class MangoTree extends FruitTree {
    // Initialize a new MangoTree
    constructor(name, age, height, matureAge, status) {
        super(age,height)
        this.name = name
        this.matureAge = matureAge
        this.stopHeight = 17
        this.deadAge = 20
    }

    // Get current states here
    // Grow the tree
    grow() {
        super.grow()
    }

    // Produce some mangoes
    produce() {
        if (this._age >= this.matureAge) {
            let totalManggo = Math.round(Math.random() * 10) + 2
            this._fruits = []
            for (let i = 0; i < totalManggo; i++) {
                this._fruits.push(new Mango())
            }
        }
    }
}

class Mango extends Fruit{
    // Produce a mango
    constructor() {
      super()
    }
  }

module.exports = MangoTree