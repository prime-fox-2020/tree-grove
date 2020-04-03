'use strict'

class FruitTree {
  
    constructor (name, age, height, matureAge, healthStatus) {
      this._name = name
      this._age = age
      this._height = height
      this._healthStatus = healthStatus
      this._matureAge = matureAge
    }
    get age () {
      return this._age
    }

    get name(){
      return this._name
    }
  
    get matureAge(){
        return this._matureAge
    }

    get height () {
      return this._height
    }
  
    get healthStatus () {
      return this._healthStatus
    }

    grow(){
        this._age += 1
        if (this._height > 9){
            this._height = this._height
        } else {
            this._height += Math.ceil(Math.random() * 3) * 0.5
        }
        if (this._age == this._matureAge + 10){
            this._healthStatus = false
        }
        return this
    }
}

class MangoTree extends FruitTree{
    constructor(name,age,height,matureAge,healthStatus){
        super(name,age,height,matureAge,healthStatus)
    }
}

// let mangoTree = new MangoTree('mango',3,2,8,true)
//    console.log('the mango tree is alive')
//    do {
//      mangoTree.grow();
//      console.log(`[Year ${mangoTree.age} Report] Height = ${mangoTree.height}`)
//    } while (mangoTree.healthStatus != false)
//    console.log('the mango tree has dead')

module.exports = MangoTree