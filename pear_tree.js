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

class PearTree extends FruitTree {
    constructor() {
        super()
    }

    grow() {
        this._age += 1
        if (this._height <= 7) {
            this._height += Math.ceil(Math.random() * 3) * 0.625
        } else {
            this._height = this._height
        }
        if (this._age === 23) {
            this._healthStatus = false
        }
        return this
    }

    // Produce some Pear
    producePear() {
        if (this._age >= 9) {
            this._fruits = Math.ceil(Math.random() * 10)
        }
        return this
    }

    // Get some fruits
    harvest() {
        let good = 0
        let bad = 0
        for (let i = 0; i < this._fruits; i++) {
            let fruit = new Pear
            if (fruit.quality === 'good') {
                good++
            } else if (fruit.quality === 'bad') {
                bad++
            }
        }
        return this._harvested = `${this._fruits} (${good} good, ${bad} bad)`
    }
}

class Pear extends Fruit {
    constructor() {
        super()
    }
}

let pearTree = new PearTree()
console.log('the pear tree is alive')
do {
    pearTree.grow()
    pearTree.producePear()
    pearTree.harvest()
    console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} | Fruits harvested = ${pearTree.harvested}`)
} while (pearTree.healthStatus != false)
console.log('the pear tree is dead')

module.exports = PearTree