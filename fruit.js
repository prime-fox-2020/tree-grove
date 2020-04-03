class Fruit {
    constructor () {
        this._quality = Math.round(Math.random()) ? 'good' : 'bad'
    }
}

module.exports = Fruit