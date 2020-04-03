let FruitTree = require('../basic.js')


class PearTree extends FruitTree {
    constructor(name,age,height,matureAge,healthStatus) {
        super(name,age,height,matureAge,healthStatus)
    }
    producePears() {
        if (this.maturityStatus == true){
        let randomFruits = Math.round(Math.random() * 10) + 1;
        for (let i = 0; i < randomFruits; i++) {
            this.fruits.push(new Pear())
            }
        }
    }
}

module.exports = PearTree