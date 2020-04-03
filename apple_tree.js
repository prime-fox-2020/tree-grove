class FruitTree {

    constructor(age = 0, height = 0, fruits = 0, healthStatus = true, harvested = null) {
        this._age = age
        this._height = height
        this._fruits = fruits
        this._healthStatus = healthStatus
        this._harvested = harvested
    }
    get age() {
        return this._age
    }
    get height() {
        return this._height
    }
    get fruits() {
        return this._fruits
    }
    get healthStatus() {
        return this._healthStatus
    }
    get harvested() {
        return this._harvested
    }
}
// Class untuk Fruit
class Fruit {
    constructor() {
        this.quality = this.quality()
    }
    quality() {
        if (Math.random() > 0.7) {
            return 'good'
        } else {
            return 'bad'
        }
    }
}

class AppleTree extends FruitTree {
    constructor() {
        super()

    }
    // Get current states here
    // Grow the tree
    grow() {
        this._age += 1
        if (this._height <= 8) {
            this._height += Math.ceil(Math.random() * 3) * 0.75
        } else {
            this._height = this._height
        }
        if (this._age === 25) {
            this._healthStatus = false
        }
        return this
    }
    // Produce some apples
    produceApples() {
        if (this._age >= 7) {
            this._fruits = Math.ceil(Math.random() * 10)
        }
        return this
    }
    // Get some fruits
    harvest() {
        let good = 0
        let bad = 0
        for (let i = 0; i < this._fruits; i++) {
            let fruit = new Apple
            if (fruit.quality === 'good') {
                good++
            } else if (fruit.quality === 'bad') {
                bad++
            }
        }
        return this._harvested = `${this._fruits} (${good} good, ${bad} bad)`
    }
}
class Apple extends Fruit {
    // Produce a mango
    constructor() {
        super()
    }
}


let appleTree = new AppleTree()
console.log('the apple tree is alive')
do {
    appleTree.grow();
    appleTree.produceApples();
    appleTree.harvest();
    console.log(`[Year ${appleTree.age} Report] Height = ${appleTree.height} | Fruits harvested = ${appleTree.harvested}`)
} while (appleTree.healthStatus != false)
console.log('the apple tree has dead')

module.exports = AppleTree
