class FruitTree {
constructor (name, age, height,mature, healthStatus=true) {
    this._name=name
    this._age=age
    this._height=height
    this._mature=mature
    this._healthStatus=healthStatus
    this._random=Math.floor(Math.random()*20)+2
    this._die=Math.floor(Math.random()*20)+2
    
}
get name(){
    return this._name
}
get age () {
    return this._age
}
    
get height () {
    return this._height
}

get mature (){
    return this._mature
}

get healthStatus () {
    return this._healthStatus
}

get random(){
    return this._random
}

get die(){
    return this._die
}
    
}
    
    

class PearTree extends FruitTree{

// Initialize a new MangoTree
constructor (name, age, height,mature, healthStatus ,die=Math.floor(Math.random()*20)+2) {
    super(name, age, height,mature, healthStatus)
}

// random(angka) {
//     return Math.floor(Math.random()*angka)+1
// }



// Get current states here

// Grow the tree
grow () {
    // this._height=0
    if(this._healthStatus==true){     

        this._age++

        if(this._height<=this._random){
            this._height+=(Math.random()*50)
            this._height= +this._height.toFixed(2)
        }
        if((this._age)>=this.mature+9){
            this._healthStatus=false
        }
    }
}



}

module.exports=PearTree