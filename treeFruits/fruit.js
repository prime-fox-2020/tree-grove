class Fruit {
  constructor () {
    this._val = (Math.random() * 5) > 3 ? "bad" : "good";
  }

  get val(){
    return this._val;
  }

  set val(val){
    this._val = val;
  }
}

module.exports = Fruit;