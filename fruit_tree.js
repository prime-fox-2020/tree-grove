class FruitTree{
    constructor(age, height, fruits, healthStatus, harvested, matureAge){
      this._age = age
      this._height = height
      this._fruits = fruits
      this._healthStatus = healthStatus
      this._harvested = harvested
      this._matureAge = matureAge
    }
  
    get age () {
      return this._age
    }
  
    get height () {
      return this._height
    }
  
    get fruits () {
      return this._fruits
    }
  
    get healthStatus () {
      return this._healthStatus
    }
  
    get harvested () {
      return this._harvested
    }
  
    get matureAge(){
        return this._matureAge
    }
    // Grow the tree
    grow () {
      this._age += 1;
      //Stop the height
      if(this.height <= 7){
        this._height += Math.random() * 1;
      } 
      
      // Died Tree
      if(this.age === 20) this._healthStatus = false;
    }
  
    // Produce some fruits
    produce () {
      if(this.age >= this.matureAge){ //Mature Age
        this._fruits = Math.ceil(Math.random() * 11); // get the fruits
        this.harvest(this.fruits); 
      } else{
        this.harvest(this.fruits)
      }
    }
  
    // Get some fruits
    harvest (fruits) {
      let good = 0;
      let bad = 0;
      // decider either good or bad
      for (let i = 0; i < fruits; i++) {
        const dice = Math.round(Math.random());
        if(dice === 1){
          good++;
        }else {
          bad++;
        }
      }
      this._harvested = `${fruits} (${good} good, ${bad} bad)`;
    }
  }

module.exports = FruitTree