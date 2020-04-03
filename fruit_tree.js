class FruitTree{
    constructor(name, age, height, matureAge, healthStatus) {
        this._name = name;
        this._age = age;
        this._height = height;
        this._matureAge = matureAge;
        this._healthStatus = healthStatus;
    }

    get name() {
        return this._name;
    }

    get age() {
        return this._age;
    }

    get height() {
        return this._height;
    }

    get matureAge() {
        return this._matureAge;
    } 
    get healthStatus() {
        return this._healthStatus;
    } 

    grow() {
        this._age += 1;
    
        if(this._age <= 15){
          this._height += Number(Math.floor(Math.random() * 5));
        }
    
        this._height = Number(this._height.toFixed(2));
    
        if(this._age >= 15){
          this._healthStatus = false;
        }
    }
}

module.exports = FruitTree;