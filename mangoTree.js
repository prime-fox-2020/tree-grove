const {FruitTree, Fruit} = require('./fruitTree');

class MangoTree extends FruitTree {
    // MangoTree has the ability to grow faster
    constructor (age, height, matureAge, healthStatus, growRate = 3) {
      super(age, height, matureAge, healthStatus);
      this.fruitClass = Mango;
      this._growRate = growRate;
    }
    get growRate() {return this._growRate;}
  
    grow() {
        for (let i = 0; i < this.growRate; i++) {
            super.grow();
        }
    }
}
  
class Mango extends Fruit {mango_tree
    //Each type of fruit tree have different succes chance producing good fruit
    constructor() {
      super();
    }
    makeFruit(){
      const coin = Math.random();
      if (coin > 0.25){
        return "Good";
      } else {
        return "Bad";
      }
    }
}

module.exports = MangoTree;