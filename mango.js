const Fruit = require('./Fruit')

class Mango extends Fruit {
    // Produce a mango
    constructor() {
        let randomNumber = Math.floor(Math.random() * 2)
        if (randomNumber == 1) {
            this.quality = "good"
        } else {
            this.quality = "bad"
        }
    }
}

module.export = Mango