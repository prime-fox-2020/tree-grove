'use strict'

class FruitTree {
  
    constructor (name, age, height, matureAge,healthStatus) {
      this._name = name
      this._age = age
      this._height = height
      this._healthStatus = healthStatus
      this._matureAge = matureAge
    }
    get age () {
      return this._age
    }
    get name (){
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
            this._height += Math.ceil(Math.random() * 3) * 0.625
        }
        if (this._age == this._matureAge + 10){
            this._healthStatus = false
        }
        return this
    }
}

class PearTree extends FruitTree{
    constructor(name,age,height,matureAge,healthStatus){
        super(name,age,height,matureAge,healthStatus)
    }
}

// let pearTree = new PearTree('pear',7,2,15,true)
//    console.log('the pear tree is alive')
//    do {
//      pearTree.grow();
//      console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} | Health = ${pearTree.healthStatus}`)
//    } while (pearTree.healthStatus != false)
//    console.log('the pear tree has dead')

module.exports = PearTree