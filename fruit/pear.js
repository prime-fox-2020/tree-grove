const Fruit = require('./fruit')

class Pear extends Fruit { 
    constructor(quality) {
        super(quality)
    }
}

module.exports = Pear