const {FruitTree, Fruit} = require('./fruitTree');

class PearTree extends FruitTree {
    // PearTree has the ability to produce the fruit double but the chance of good fruit is lower
    constructor(age, height, matureAge, healthStatus, fruitMultiply = 3) {
      super(age, height, matureAge, healthStatus);
      this.fruitClass = Pear;
      this._fruitMultiply = fruitMultiply;
    }
    get fruitMultiply() {return this._fruitMultiply;}
  
    produceFruits(fruitType = this.fruitClass) {
      if (this.age >= this.matureAge && this.age <= this.pauseAge) {
        let countFruits = (this.age-this.matureAge) + Math.ceil(Math.random() * (2+this.age-this.matureAge));
        countFruits *= this.fruitMultiply;
        for (let i = 0; i < countFruits; i++) {
          const fruit = new fruitType;
          this.fruits.push(fruit);
        }
      }
    }
}
  
class Pear extends Fruit {
    //Each type of fruit tree have different succes chance producing good fruit
    constructor() {
      super();
    }
    makeFruit(){
      const coin = Math.random();
      if (coin > 0.45){
        return "Good";
      } else {
        return "Bad";
      }
    }
}

module.exports = PearTree;

