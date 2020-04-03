const {FruitTree, Fruit} = require('./fruitTree');

class AppleTree extends FruitTree {
    // AppleTree has the ability to produce longer
    constructor(age, height, matureAge, healthStatus, longevity = 10) {
      super(age, height, matureAge, healthStatus);
      this.fruitClass = Apple;
      this._longevity = longevity;
    //   this.matureAge -= this.longevity;
      this.pauseAge += this.longevity;
      this.witherAge += this.longevity;
    }
    get longevity() {return this._longevity;}
  }
  
class Apple extends Fruit {
    //Each type of fruit tree have different succes chance producing good fruit
    constructor() {
      super();
    }
    makeFruit(){
      const coin = Math.random();
      if (coin > 0.35){
        return "Good";
      } else {
        return "Bad";
      }
    }
  }

module.exports = AppleTree;