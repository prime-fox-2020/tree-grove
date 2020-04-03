const Fruit = require('./fruit');

class FruitTree {
  // Initialize a new FruitTree
  constructor () {
    this._age = 0; //umur pohon
    this._height = 0; //tinggi pohon
    this._fruits = []; //jumlah buah
    this._healthStatus = true; //keadaan pohon
    this._harvested = false; //keterangan berapa buah yang dipanen
    this._maxHeight = 7; //maksimal pertumbuhan pada umur
    this._maxFruit = 50; //jumlah maksimal buah
    this.matureAge = 3; //usia pohon berbuah
    this.fruit = Fruit; //pilih objek buah
    this.increase = 1; //maksimal pertumbuhan pertahun (meter)
    this.dead = 20;
  }
  
  get age () {
    return this._age;
  }
  get height () {
    return this._height;
  }
  get fruits () {
    return this._fruits;
  }
  get healthStatus () {
    return this._healthStatus;
  }
  get harvested () {
    return this._harvested;
  }

  set age (par) {
    this._age = par;
  }
  set height (par) {
    this._height = par;
  }
  set fruits (par) {
    this._fruits = par;
  }
  set healthStatus (par) {
    this._healthStatus = par;
  }
  set harvested (par) {
    this._harvested = par;
  }
  
  // Grow the tree
  grow () {
    this.age++;
    if (this.age <= this._maxHeight) {
      let now = Number(this.height) * 10;
      let plus = (Math.random()*10*this.increase);
      this.height = ((now + plus)/10).toFixed(1);
    }
    
    if (this.age == this.dead) this.healthStatus = false;
  }

  // Produce some fruits
  produceFruits () {
    let rand = Math.random() * this._maxFruit;
    for (let i = 0; i < rand; i++) {
      this.fruits.push(new this.fruit);
    }

    for (let i = 0; i < this.fruits.length; i++) {
      if (Math.random() > 0.5) {
        this.fruits[i].good++;
      } else {
        this.fruits[i].bad++;
      }
    }
    if (this.age < this.matureAge) this.fruits = [];
  }
  
  // Get some fruits
  harvest () {
    let good = 0, bad = 0;
    for (let i = 0; i < this.fruits.length; i++) {
      if (this.fruits[i].good) {
        good++;
      } else {
        bad++;
      }
    }
    this.harvested = `${this.fruits.length} (${good} good, ${bad} bad)`
    this.fruits = [];
  }

}

module.exports = FruitTree;