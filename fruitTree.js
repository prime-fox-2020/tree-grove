class FruitsTree{
    constructor (umurAwal,tinggiAwal,umurMati,status) {
        this._age = umurAwal 
        this._height = tinggiAwal
        this._fruits = 0 
        this._healthStatus = status
        this._harvested = []
        this._umurAwal = umurAwal
        this._tinggiAwal= tinggiAwal
        this._umurMati=umurMati
        
    }
    
    get age () {
        return this._age
    }
    set age(umur){
        return this._age = umur
    }
    
    get height () {
        return this._height
    }
    set height(tinggi){
        return this._height =tinggi
    }
    
    get fruits () {
        return this._fruits
    }
    set fruits (buah){
        return this._fruits = buah
    }  
    
    get healthStatus () {
        return this._healthStatus
    }
    set healthStatus (status){
        return this._healthStatus = status
    }  
    
    get harvested () {
        return this._harvested
    }
    set harvested(jumlahBuah){
        return this._harvested =jumlahBuah
    }

    get umurAwal(){
        return this._umurAwal
    }
    set umurAwal(umur){
        return this._umurAwal = umur
    }

    get tinggiAwal(){
        return this._tinggiAwal
    }
    set tinggiAwal(tinggi){
        return this._tinggiAwal = tinggi
    }

    get umurMati(){
        return this._umurMati
    }
    set umurMati(umurDeath){
        return this._umurMati=umurDeath
    }
  
    grow () {
        this._age ++
        if(this._age <this._umurMati){

          this._height += Math.random()
        }
        
        //Umur Pohon Mati  
        if(this.age>=this._umurMati){
          this._healthStatus = false
        //   console.log('The tree has met its end. :sad:')
        }
    
        this._height = Math.floor(this._height*10)/10 ;
        
        return this
    }
      
    // Produce some Fruits
    produceFruits(tahun1,tahun2,produksi1,produksi2) {
        if(this._age>=tahun1 && this._age<=tahun2){
            this._fruits = Math.random()*produksi1
        }else if(this.age>tahun2){
            this._fruits = Math.random()*produksi2
        }
    }

    harvest () {
        let good =0;
        let bad = 0
        for (let i = 0; i < this.fruits; i++) {
          let tesFruit = new Fruit();
          tesFruit.cek()
          if(tesFruit.quality == 'good'){
            good ++
          }else{
            bad ++
          }
        }
        this._harvested=`${good+bad} (${good} good, ${bad} bad)`
    }
  
  }
  
class Fruit {
    // Produce a Fruits
    constructor () {
        this.quality =''
    }
  
    cek(){
      let angka = Math.random();
      if(angka<0.2){
        this.quality = 'bad'
      }else{
        this.quality = 'good'
      }
    }
}
  


// let fruit = new FruitsTree(umurAwal,tinggiAwal,umurMati,status)
//   fruit.harvest()
//   console.log('The tree is alive! :smile:')
//   do {
//     //   console.log(fruit.umurAwal)
//     // if(fruit.age>fruit.umurAwal){
//     // console.log(`[Year ${fruit.age} Report] Height = ${fruit.height} m | Fruits harvested = ${fruit.harvested}`);
//     // }
//     fruit.grow();
//     fruit.produceFruits();
//     fruit.harvest();
// } while (fruit.healthStatus != false)


  //=======================================================================================//
  //=======================================================================================//
  
//   console.log(`\n ================================================================= `)
//   console.log(` ================================================================= \n`)
  
//   class PearTree extends FruitsTree{
//     constructor(){
//         super()
//     }
  
//     grow () {
//         super.grow(15,0.4,0.2,20,0.7)
//         return this
//     }
  
//     // Produce some mangoes
//     // Pear Berbuah biasanya Umur 2 tahun
//     produceFruits () {
//         super.produceFruits(2,5,30,50)
//     }
  
//     harvest () {
//         super.harvest()
//         return this
//     }
  
//   }  
  
//   class Pear extends Fruit {
//     // Produce a pear
//     constructor () {
//       super()
//     }
//     cek(){
//       super.cek()
//     }
//   }
  
  // driver code untuk release 0
//   let pearTree = new PearTree()
//   pearTree.harvest()
//   console.log('The Pear tree is alive! :smile:')
//   do {
//     if(pearTree.age>0){
//     console.log(`[Year ${pearTree.age} Report] Height = ${pearTree.height} m | Fruits harvested = ${pearTree.harvested}`);
//     }
//     pearTree.grow();
//     pearTree.produceFruits();
//     pearTree.harvest();
//   } while (pearTree.healthStatus != false)

module.exports = FruitsTree
// module.exports = Fruit 