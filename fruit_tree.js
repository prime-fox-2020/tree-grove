class FruitTree {
  // Initialize a new FruitTree
  constructor(matureAge, age = 0, height = 0, healthStatus = true, maxAge, growthRate, stopGrowingAge, baseFruitsPerYear) {
    this.matureAge = matureAge;
    this.maxAge = maxAge;
    this.growthRate = growthRate;
    this.stopGrowingAge = stopGrowingAge;
    this.baseFruitsPerYear = baseFruitsPerYear;
    this._age = age;
    this._height = height * 100;
    this._isMature = false;
    this._canGrow = true;
    this._healthStatus = healthStatus;
    this._growthStat = [];
    this._harvested = 0;
    this._goodGrade = 0;
    this._fruits = [];
  }

  get canGrow() {
    return this._canGrow;
  }
  get growthStat() {
    return this._growthStat;
  }
  get age() {
    return this._age;
  }
  get height() {
    return this._height;
  }
  get isMature() {
    return this._isMature;
  }
  get fruits() {
    return this._fruits;
  }
  get healthStatus() {
    return this._healthStatus;
  }
  get harvested() {
    return this._harvested;
  }
  get goodGrade() {
    return this._goodGrade;
  }
  get name() {
    return this._name;
  }

  // Get current states here
  set age(num) {
    this._age += num;
  }
  set height(num) {
    let growth = this.growthRate * num;
    this._height += growth;
  }
  set isMature(bool) {
    this._isMature = bool;
  }
  set canGrow(bool) {
    this._canGrow = bool;
  }
  set healthStatus(bool) {
    this._healthStatus = bool;
  }
  set harvested(num) {
    this._harvested = num;
  }
  set fruits(arr) {
    this._fruits = arr;
  }
  set goodGrade(num) {
    this._goodGrade = num;
  }
  // Grow the tree
  grow() {
    if (this.canGrow) this.height = Math.random();

    // Tambah umur
    this.age = 1;

    // Layak berbuah di umur ke 3
    if (this.age === this.matureAge) this.isMature = true;

    // Stop grow height
    if (this.age === this.stopGrowingAge) this.canGrow = false;

    // Sudah saatnya pohon mati
    if (this.age === this.maxAge) this.healthStatus = false;
  }
  // Get some fruits
  harvest() {
    // Quality check for each fruit this year
    let goodGrade = 0;
    this.fruits.forEach(el => {
      if (el.grade > 80) goodGrade++;
    });

    // Recording our tree performance for this year
    this.harvested = this.fruits.length;
    this.goodGrade = goodGrade;
    // console.log(this.fruits)
    // Clearing tree or harvesting mango is finished
    this.fruits = [];
  }
}

module.exports = FruitTree;