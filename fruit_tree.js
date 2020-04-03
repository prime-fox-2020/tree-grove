class FruitTree {
    constructor (heightLimit, matureAge, deadAge, yearLimit = 0) {
        this._age = 0
        this._height = 0
        this._fruits = []
        this._healthStatus = true
        this._harvested = {good: 0, bad: 0}
        this._yearLimit = yearLimit
        this._heightLimit = heightLimit
        this._matureAge = matureAge
        this._deadAge = deadAge
        this._name = ''
    }
    
    get age () {
        return this._age
    }
    get height () {
        return this._height.toFixed(1)
    }
    get fruits () {
        return this._fruits
    }
    get healthStatus () {
        return this._healthStatus
    }
    
    get name() {
        return this._name
    }

    get harvested () {
        return `${this._harvested.good + this._harvested.bad} (${this._harvested.good} good, ${this._harvested.bad} bad)`
    }
  
    // Grow the tree
    grow () {
        this._age++
        if (this._height < this._heightLimit){
            this._height += Math.random()
        }

        if (this._age == this._deadAge ){
            this._healthStatus = false
        }
    }

    // Harvest some Fruits
    harvest () {
        let good = []
        let bad = []
        for (let i = 0; i < this._fruits.length; i++) {
            if (this._fruits[i]._quality === 'bad') {
                bad.push(this.fruits[i])
            } else {
                good.push(this.fruits[i])
            }
        }
        this._harvested.good = good.length
        this._harvested.bad = bad.length
        this._fruits = []
    }
}

module.exports = FruitTree