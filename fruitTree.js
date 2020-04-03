class FruitTree {
    constructor (name, age, height, matureAge, healthStatus) {
      this._name = name;
      this._age = age;
      this._height = height;
      this._matureAge = matureAge; // starts producing
      this._healthStatus = healthStatus;
      this._die = 20; //cant produce anymore
    }
  
    get name () {
      return this._name
    }
  
    get age () {
      return this._age;
    }
  
    get height () {
      return this._height;
    }
  
    get matureAge (){
      return this._matureAge
    }
  
    get healthStatus () {
      return this._healthStatus;
    }
  
    grow () {
      let randomHeight = Number((Math.random()).toFixed(1));
      let stopGrowing = 10;
  
      if (this._height <= stopGrowing){
        this._height = Number((this._height + randomHeight).toFixed(1));
      }
  
      this._age += 1;
      if (this._age === this._die){
        this._healthStatus = false;
      }
    }
  }
  
  class AppleTree extends FruitTree {
    constructor(name, age, height, matureAge){
      super(name, age, height, matureAge)
      this._healthStatus = false;
      this._die = 1
    }
  }
  
  apel = new AppleTree ('apel', 1, 2, 3, true)
  console.log(apel)
  
  class MangoTree extends FruitTree {
    constructor (name, age, height, matureAge, healthStatus) {
      super(name, age, height, matureAge, healthStatus)
      this._matureAge = 5; // starts producing
      this._die = 15; //cant produce anymore
    }
  }
  
  class PearTree extends FruitTree {
    constructor (name, age, height, matureAge, healthStatus) {
      super(name, age, height, matureAge, healthStatus)
      this._matureAge = 10; // starts producing
      this._die = 20; //cant produce anymore
    }
  }
  
  module.exports = {
    FruitTree, AppleTree, MangoTree, PearTree
  }