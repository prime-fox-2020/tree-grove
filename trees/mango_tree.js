let FruitTree = require('../basic.js')


class MangoTree extends FruitTree {
    constructor(name,age,height,matureAge,healthStatus) {
        super(name,age,height,matureAge,healthStatus)
    }
    produceMangoes() {
        if (this.maturityStatus == true){
        let randomFruits = Math.round(Math.random() * 20) + 1;
        for (let i = 0; i < randomFruits; i++) {
            this.fruits.push(new Mango())
            }
        }
    }
}

module.exports = MangoTree