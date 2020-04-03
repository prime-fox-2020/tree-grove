class FruitTree {
  constructor(name, age = 0, height = 0, matureAge = 0, healthStatus = true) {
    this.name = name;
    this.plantedAtAge = age;
    this._age = age;
    this._height = height;
    this._fruits = [];
    this._harvested = { good: 0, bad: 0 };
    this._healthStatus = healthStatus;
    this._deadAge = Math.round(Math.random() * 20 + age + 1);
    this._matureAge = matureAge;
    this._limitGrowth = Math.round(Math.random() * 15 + age + 1);
    this._limitProduce = this._deadAge;
  }
  get age() {
    return this._age;
  }

  get height() {
    return this._height;
  }

  get fruits() {
    return this._fruits;
  }

  get healthStatus() {
    return this._healthStatus;
  }

  get harvested() {
    let good = this._harvested.good;
    let bad = this._harvested.bad;
    return `${good + bad} (${good} good, ${bad} bad)`;
  }

  get deadAge() {
    return this._deadAge;
  }

  get matureAge() {
    return this._matureAge;
  }

  // Get current states here

  // Grow the tree
  grow() {
    this._harvested.good = 0;
    this._harvested.bad = 0;

    if (this._age < this.deadAge) {
      this._age++;
    }

    if (this._age < this._limitGrowth) {
      this._height += Math.random() * 3 + 1;
    }

    if (this._age === this._deadAge) {
      this._healthStatus = false;
    }

  }

  produceFruits(fruit) {
    if (this.age >= this._matureAge) {
      this._fruits.push(fruit);
    }
  }

  // Get some fruits
  harvest() {
    this._fruits.forEach(fruit => {
      fruit.quality ? this._harvested.good++ : this._harvested.bad++;
    });

    this._fruits.length = 0;
  }
}


module.exports = FruitTree;
