const FruitTree = require('./fruit_tree').FruitTree
const Fruit = require('./fruit_tree').Fruit

class PearTree extends FruitTree{
    constructor(name, age, height, matureAge, healthStatus, stopGrow ,dead){
        super(name, age, height, matureAge, healthStatus, stopGrow ,dead)
    }
    produceFruits(){
        super.produceFruits(Pear)
    }
    harvest(){
        super.harvest()
        let big = 0
        let medium = 0
        let small = 0
        this.fruits.forEach(fruit =>{
            if(fruit.size === 'big'){
                big++
            }else
            if(fruit.size == 'medium'){
                medium++
            }else{
                small++
            }
        })
        this.harvested += ` (${big} big, ${medium} medium, ${small} small)`
    }

}

class Pear extends Fruit{
    constructor(){
        super()
        this._size = this.randomSize()
    }
    get size(){
        return this._size
    }
    randomSize(){
        let random = Math.ceil(Math.random()*3)
        if (random == 3){
            return 'big'
        }else
        if (random == 2){
          return 'medium'
        }else{
          return 'small'
        }
    }
}

module.exports = PearTree