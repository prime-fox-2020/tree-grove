class Fruit {
    constructor() {
        this._quality = Math.round(Math.random()) ? 1 : 0;
    }

    get quality() {
        return this._quality;
    }
}


module.exports = Fruit;
