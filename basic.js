"use strict"

// let Fruit

class FruitTree {
    constructor(name,age,height,matureAge,healthStatus) {
        this.Name = name
        this.age = age
        this.height = height
        this.fruits = []
        this.harvested = { good: 0, bad: 0 }
        this.healthStatus = healthStatus
        this.maturityStatus = false
        this.limitAge = 5;
        this.limitGrow = Math.floor(Math.random() * 20) + 15;
        this.matureAge = matureAge;
    }
    /// calculatornya di sini lah ya ////
    /// fungsi get dan set untuk mengubah value dari properti yang private
    /// constructor (parameter)

    get getAge() {
        return this.age;
    }

    get getHeight() {
        return this.height;
    }

    get getFruits() {
        return this.fruits;
    }

    get getHealthStatus() {
        return this.healthStatus
    }

    get getHarvested() {
        let goodFruits = this.harvested.good;
        let badFruits = this.harvested.bad;
        return ` ${goodFruits + badFruits} (${goodFruits} good, ${badFruits} bad)`
    }
    
    grow() {
        this.harvested.good = 0;
        this.harvested.bad = 0;
    
        this.age++;
        if (this.age < this.limitGrow) {
            this.height += Math.floor(Math.random() * 3) + 1;
        }
        if (this.matureAge < this.age) { 
            this.maturityStatus = true
        }
        if (this.age == this.limitAge) {
            this.healthStatus = false
        }
    }
    
    harvest() {
        for (let i = 0; i < this.fruits.length; i++) {
            if (this.fruits[i].quality == 1) this.harvested.good++;
            else this.harvested.bad++;
        }
        this.fruits = []
    }


}

module.exports=FruitTree
