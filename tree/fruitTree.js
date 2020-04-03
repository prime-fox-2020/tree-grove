const Fruit = require('../fruit/fruit.js')

class FruitTree { 
    constructor (age, height, matureAge, healthStatus, fruits, harvested = 0, maxAge, maxGrow) {
        this._age = age
        this._height = height
        this._fruits = []
        this._healthStatus = healthStatus
        this._harvested = harvested
        this._maxAge = maxAge
        this._maxGrow = maxGrow
        this._matureAge = matureAge
    }

    get age () {
        return this._age
    }
    
    get height () {
        return this._height
    }
    
    get fruits () {
        return this._fruits
    }
    
    get healthStatus () {
        return this._healthStatus
    }
    
    get matureAge () {
        return this._matureAge
    }

    get harvested () {
        return this._harvested
    }
    
    set age(param) {
        this._age = param;
    }

    set height(param) {
        this._height = param
    }

    set fruits (param) {
        this._fruits = param
    }

    set healthStatus(param) {
        this._healthStatus = param;
    }

    set matureAge (param) {
        this._matureAge = param
    }

    set maxAge (param) {
        this._maxAge = param
    }

    set maxGrow (param) {
        this._maxGrow = param
    }

    set harvested(param) {
        return this._harvested
    }

    // Get current states here

    // Grow the tree
    grow () {
        if(this._age <= this._maxAge) {
            this.age++
        }
        if(this._age <= this._maxGrow) {
            this._height += Math.random()
        }
        if(this._age >= this._maxAge) {
            this._healthStatus = false
        }
        return this
    }

    // Produce some fruits
    produceFruits () {
        if(this._age > this._matureAge) {
            let totalFruit = Math.ceil(Math.random()*10) 
            for(let i = 0; i < totalFruit; i++) {
                let fruit = new Fruit
                fruit.produce()
                this._fruits.push(fruit.quality)
            }
        
        }
    }

    // Get some fruits
    harvest () {
        let good = 0
        let bad = 0

        for(let i = 0; i < this._fruits.length; i++) {
            if(this._fruits[i] == 'good') {
                good++
            } else {
                bad++
            }
        }
        this._harvested = `${this._fruits.length} (${good} good, ${bad} bad)`
        this._fruits = []
    }
}

module.exports = FruitTree