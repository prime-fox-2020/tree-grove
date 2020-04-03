class FruitTree {
    constructor(age = 0, height = 0) {
        this._age = age,
            this._height = height,
            this._fruits = [],
            this._healthStatus = true,
            this._haevested = null
    }

    get age() {
        return this._age
    }

    get height() {
        return this._height.toFixed(1)
    }

    get fruits() {
        return this._fruits
    }

    get healthStatus() {
        return this._healthStatus
    }

    get harvested() {
        return this._haevested
    }

    // Get current states here

    grow() {
        this._age++
        if (this._age > this.deadAge) {
            this._healthStatus = false
        }
        if (this._age < this.stopHeight) {
            this._height += Math.random() * 0.7 + 0.2
        }
    }

    // Get some fruits
    harvest() {
        let goodQuality = 0
        for (let i = 0; i < this._fruits.length; i++) {
            if (this._fruits[i].quality == 'good') {
                goodQuality++
            }
        }

        this._haevested = `${this._fruits.length} (${goodQuality} good : ${this._fruits.length - goodQuality} bad)`
    }
}

module.exports =  FruitTree