class Fruit {
    // Produce a Fruit
    constructor() {
        let randomNumber = Math.floor(Math.random() * 2)
        if (randomNumber == 1) {
            this.quality = "good"
        } else {
            this.quality = "bad"
        }
    }
}

module.exports = Fruit