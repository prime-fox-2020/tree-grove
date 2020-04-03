"use strict"
const Tree = require('./fruit-tree')

class MangoTree extends Tree {

    // Initialize a new MangoTree
    constructor(age, height, matureAge, healthStatus, fruits, harvested, maxGrowth) {
        super(age, height, fruits, healthStatus, harvested)
        this._matureAge = matureAge
        this._maxGrowth = maxGrowth
    }

    get matureAge (){
        return this._matureAge
    }
    get maxGrowth (){
        return this._maxGrowth
    }

    set matureAge (param){
        this._matureAge = param
    }
    set maxGrowth (param){
        this._maxGrowth = param
    }

    // Grow the tree

    grow() {
        this.age += 1
        this.height += Math.round(Math.random() * 10) / 10
        if (this.age >= this.maxGrowth) {
            this.healthStatus = false
        }
    }

    // Produce some mangoes
    produce() {
        if (this.age >= this.matureAge) {
            this.fruits = Math.round(Math.random() * 10)
        }
    }

    // Get some fruits
    harvest() {
        let good = 0;
        let bad = 0;
        for (let i = 0; i < this.fruits; i++) {
            const random = Math.round(Math.random());
            if (random === 1) {
                good++;
            } else {
                bad++;
            }
        }
        this.harvested = `${this.fruits} (${good} good, ${bad} bad)`
    }

}

class Mango {
    // Produce a mango
    constructor() {

    }
}


//  driver code
// console.log(`=============================================================\n`)
// console.log(`The mango tree is alive! :smile:`)

// let mangoTree = new MangoTree(3, 10)
// do {
//     mangoTree.grow();
//     mangoTree.produce();
//     mangoTree.harvest();
//     console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height} | Fruits harvested = ${mangoTree.harvested}`)
// } while (mangoTree.healthStatus != false)

// console.log(`The tree has met its end. :sad:`)
// console.log(`\n=============================================================\n`)

module.exports = MangoTree