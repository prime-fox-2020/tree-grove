class FruitTree {
  //set dynamic value
  constructor (nama, umur, tinggi, matureAge, healthStat) {
    //set constant value
    this._name = nama;
    this._age = umur;
    this._height = tinggi;
    this._fruits = 0;
    this._healthStat = healthStat;
    this._harvested = 0;
    this._matureAge = matureAge;
    this._matureStatus = false;
    this._maxAge = 5;
  }

//getter

  get name() {
    return this._name;
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

  get healthStat() {
    return this._healthStat;
  }

  get harvested() {
    return this._harvested;
  }

  get matureAge() {
    return this._matureAge;
  }

  get matureStatus() {
    return this._matureStatus;
  }

  get maxAge() {
    return this._maxAge;
  }

//setter
  // set age(val) {
  //   this._age = val;
  // }
  //
  // set height(val) {
  //   this._height = val;
  // }
  //
  // set fruits(val) {
  //   this._fruits = val;
  // }
  //
  // set healthStatus(val) {
  //   this._healthStatus= val;
  // }
  //
  // set harvested(val) {
  //   this._harvested= val;
  // }
  //
  // set matureAge(val) {
  //   this._matureAge= val;
  // }
  //
  // set matureStatus(val) {
  // this._matureStatus= val;
  // }
  //
  // set maxAge(val) {
  //   this._maxAge= val;
  // }

  grow () {
    this._age++;
    if (this._age >= this._maxAge) {
      this._healthStat = false;
    }

    if (this._age > this._matureAge) {
      this._matureStatus = true;
    }

    if (this._age <= this._maxAge) {
      this._height += Math.random()*1;
    }

  }

  // Produce some fruits
  produce () {
      this._fruits = [];
      let quality = ["Good", "Bad"];
      let rand = Math.floor(Math.random()*10);

      if (this._matureStatus === true) {
      while (rand >= 0) {
        let random = Math.floor(Math.random()*2);
        this._fruits.push(new Fruit(quality[random]));
        rand--;
      }
    }
  }

  // Get some fruits
  harvest () {

    let harvestedFruit = this._fruits.length
    let countBad = 0;
    let countGood = 0;

      for (var i = 0; i < harvestedFruit; i++) {
        if (this._fruits[i].quality == "Good") {
          countGood++;
        }
        else {
          countBad++;
        }
        this._harvested = `${this._fruits.length} (${countGood} Good, ${countBad} Bad)`
      }
    }
}

class Fruit {
  constructor (random) {
      this.quality =random;
  }
}


//Export module
module.exports = FruitTree;
