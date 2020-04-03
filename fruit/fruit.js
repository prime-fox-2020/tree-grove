
class Fruit {
    constructor (quality) {
        this.quality = quality
    }

    produce() {
        let roll = Math.ceil(Math.random()*10)
        if(roll > 5) {
            this.quality = 'good'
            return this
        } else {
            this.quality = 'bad'
            return this
        }
    }
}

module.exports = Fruit