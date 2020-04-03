class Fruit {
    constructor() {
        this.quality = this.getQuality()
    }

    getQuality() {
        return Math.random() < 0.5 ? 'good' : 'bad'
    }
}

module.exports = Fruit