const FruitTree = require('./fruit_tree').FruitTree
const Fruit = require('./fruit_tree').Fruit

class MangoTree extends FruitTree{
    constructor(name, age, height, matureAge, healthStatus, stopGrow ,dead){
        super(name, age, height, matureAge, healthStatus, stopGrow ,dead)
    }
    produceFruits(){
        super.produceFruits(Mango)
    }
    harvest(){
        super.harvest()
        let manis = 0
        let wry = 0
        this.fruits.forEach(fruit => {
            if (fruit.taste == 'wry'){
                wry++
            }else{
                manis++
            }
        });
        this.harvested += ` (sweet : ${manis}, wry : ${wry})`
    }
}

class Mango extends Fruit{
    constructor() {
        super()
        this._taste = this.randomTaste()
    }
    get taste(){
        return this._taste
    }
    randomTaste(){
        let random = Math.floor(Math.random()*2)
        if (random == 1){
            return 'wry'
        }else{
            return 'sweet'
        }
    }
} 

module.exports = MangoTree