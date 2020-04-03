class MangoTree{
    constructor(age, height, matureAge, healtyStatus) {
        this._name = 'Mango Tree'
        this._age = age
        this._height = height
        this._matureAge = matureAge
        this._healtyStatus = healtyStatus
    }
    get name(){
        return this._name
    }
    get age(){
        return this._age
    }
    get height(){
        return this._height
    }
    get matureAge(){
        return this._matureAge
    }
    get healtyStatus(){
        return this._healtyStatus
    }
    grow(){
        if(this._healtyStatus){
            this._age += 1
            if(this._age  > this._matureAge + 9){
                this._healtyStatus = false
            }
            let changeHeight = Math.random()*10
            this._height += changeHeight
            this._height = Number(this._height.toFixed(2))
        }
    }
}

module.exports = MangoTree