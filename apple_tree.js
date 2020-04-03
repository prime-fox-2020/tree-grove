const FruitTree = require('./fruit_tree').FruitTree
const Fruit = require('./fruit_tree').Fruit

class AppleTree extends FruitTree{
    constructor(name, age, height, matureAge, healthStatus, stopGrow ,dead){
        super(name, age, height, matureAge, healthStatus, stopGrow ,dead)
    }
    produceFruits(){
        super.produceFruits(Apple)
    }
    harvest(){
        super.harvest()
        let red = 0
        let green = 0
        this.fruits.forEach(fruit => {
            if(fruit.color == 'red'){
                red++
            }else{
                green++
            }
        });
        this.harvested += ` (${red} red, ${green} green)`
    }

}

class Apple extends Fruit{
    constructor(){
        super()
        this._color = this.randomColor()   
    }
    get color(){
        return this._color
    }
    randomColor(){
        let random = Math.ceil(Math.random()*2)
        if (random == 2){
          return 'red'
        }else{
          return 'green'
        }
    }
}

module.exports = AppleTree