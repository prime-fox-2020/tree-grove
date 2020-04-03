"use strict"
const Tree = require('./fruit-tree')

class PearTree extends Tree {

    // Initialize a new PearTree
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

    // Produce some pears
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

class Pear {
    constructor() {

    }
}

//  driver code
// console.log(`=============================================================\n`)
// console.log(`The pear tree is alive! :smile:`)

// let pearTree = new PearTree(2, 25)
// do {
//     pearTree.grow();
//     pearTree.produce();
//     pearTree.harvest();
//     console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} | Fruits harvested = ${pearTree.harvested}`)
// } while (pearTree.healthStatus != false)

// console.log(`The tree has met its end. :sad:`)
// console.log(`\n=============================================================\n`)

module.exports = PearTree