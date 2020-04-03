class FruitTree {
  constructor (name, age, height, harvestAge, healthStatus) {
    this._name = name;
    this._age = age;
    this._height = height;
    this._harvestAge = harvestAge;
    this._healthStatus = healthStatus;
    this._maxAge = 5 + harvestAge;
  }

  get name () {
    return this._name;
  }
  
  get age () {
    return this._age;
  }

  get height () {
    return this._height;
  }

  get healthStatus () {
    return this._healthStatus;
  }

  get harvestAge () {
    return this._harvestAge;
  }

  // Get current states here

  // Grow the tree
  grow () {
    if (this._healthStatus) {
      this._age += 1;
      this._height += Math.random();
      this._height = Number(Number(this._height).toFixed(2));
      if (this._age >= this._maxAge) {
        this._healthStatus = false;
      }
    }
    return this;
  }
}
class MangoTree extends FruitTree{
  constructor(age, height, matureAge, healtyStatus){
      super('Mango Tree', age, height, matureAge, healtyStatus )
  }
}

module.exports = MangoTree
