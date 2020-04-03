"use strict"
const Tree = require('./fruit-tree')

class AppleTree extends Tree {

    // Initialize a new AppleTree
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

    // Produce some apples
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

class Apple {
    constructor() {

    }
}

//  driver code
// console.log(`=============================================================\n`)
// console.log(`The apple tree is alive! :smile:`)

// let appleTree = new AppleTree(5, 15)
// do {
//     appleTree.grow();
//     appleTree.produce();
//     appleTree.harvest();
//     console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
// } while (appleTree.healthStatus != false)

// console.log(`The tree has met its end. :sad:`)
// console.log(`\n=============================================================\n`)

module.exports = AppleTree