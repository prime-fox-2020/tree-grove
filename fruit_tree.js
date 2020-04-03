let Fruit = require("./fruit");

class FruitTree {
  constructor(name, age, height, matureAge, healthStatus, mature, averageFruits, growth, die) {
    this._name = name;
    this._age = age || 0;
    this._height = height || 0;
    this._matureAge = matureAge || 5;
    this._healthStatus = healthStatus || true;

    // ADDITIONAL
    this._fruits = 0;
    this._mature = mature || false;
    this.quality = {
      good: 0,
      bad: 0
    };

    this._averageFruits = averageFruits || 30;
    this._growth = growth || 12;
    this._die = die || 30;
  }

  get age() {
    return this._age;
  }
  get name() {
    return this._name;
  }
  get height() {
    return `${this._height.toFixed(1)}  m`;
  }
  get fruits() {
    return this._fruits;
  }
  get healthStatus() {
    return this._healthStatus;
  }
  get mature() {
    return this._mature;
  }
  get matureAge() {
    return this._matureAge;
  }
  get averageFruits() {
    return this._averageFruits;
  }
  get growth() {
    return this._growth;
  }
  get die() {
    return this._die;
  }
  get harvested() {
    return `${this._fruits} (${this.quality.good} GOOD, ${this.quality.bad} BAD)`;
  }

  randomGenerate(num) {
    return !num ? Math.random() : Math.ceil(Math.random() * num);
  }

  grow() {
    this._age++;
    if (this._age <= this._growth) this._height += this.randomGenerate();
    if (this._age === this._die) this._healthStatus = false;
    if (this._age === this._matureAge) this._mature = true;
  }

  produceFruits() {
    if (this._mature) this._fruits = this.randomGenerate(this._averageFruits);
  }

  harvest() {
    this.quality.good = 0;
    this.quality.bad = 0;
    for (let i = 0; i < this._fruits; i++) {
      let fruit = new Fruit();
      if (fruit.quality === "GOOD") this.quality.good++;
      else this.quality.bad++;
    }
  }
}

module.exports = FruitTree;