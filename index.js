const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

class TreeGrove {
    constructor(){
        this.data =[];
    }

    inputTree(namaPohon,umurAwal,tinggiAwal,umurMati,status){
       if(namaPohon =='MangoTree'){
        this.data.push(new MangoTree(umurAwal,tinggiAwal,umurMati,status))
       }else if(namaPohon=='AppleTree'){
        this.data.push(new AppleTree(umurAwal,tinggiAwal,umurMati,status))
       }else if(namaPohon == 'PearTree'){
        this.data.push(new PearTree(umurAwal,tinggiAwal,umurMati,status))
       }
    };
    nextYear(){
        for (let i = 0; i < this.data.length; i++) {
            this.data[i].grow();
            this.data[i].produceFruits();
            this.data[i].harvest()
        }
    };
    showAges(){
        for (let i = 0; i < this.data.length; i++) {
            console.log(`${this.data[i].name} Tree | age : ${this.data[i]._age} years`)
        }
    };
    showTrees(){
        console.log('---------------list Pohon Yang ada---------------')
        for (let i = 0; i < this.data.length; i++) {
            console.log(` Pohon ${this.data[i].name} || Height :${this.data[i]._height} || age : ${this.data[i]._age} || mature age : ${this.data[i].awalBerbuah} || health status : ${this.data[i]._healthStatus} `)
            
        }
    };
    showMatureTrees(){
        console.log('----------list Pohon Sedang Berbuah---------------')
        for (let i = 0; i < this.data.length; i++) {
            if(this.data[i]._age>this.data[i].awalBerbuah && this.data[i]._healthStatus == true ){
                console.log(` Pohon ${this.data[i].name} || Height :${this.data[i]._height} || age : ${this.data[i]._age} || mature age : ${this.data[i].awalBerbuah} || health status : ${this.data[i]._healthStatus} `)
            }
        }
    };
    showDeadTrees(){
        console.log('---------------list Pohon Mati---------------')
        for (let i = 0; i < this.data.length; i++) {
            if(this.data[i].healthStatus !== true){
                console.log(` Pohon ${this.data[i].name} || Height :${this.data[i]._height} || age : ${this.data[i]._age} || mature age : ${this.data[i].awalBerbuah} || health status : ${this.data[i]._healthStatus} `)
            }
        }
    };
}

var grove = new TreeGrove()
// input your trees data !
// parameter ke-1: nama pohon
// parameter ke-2: umur pohon ketika ditanam di taman tersebut
// pamareter ke-3: tinggi pohon pertama kali ketika ditanam di taman tersebut
// parameter ke-4: umur mature pohon tersebut
// parameter ke-5: healthStatus dari pohon tersebut ketika ditanam
grove.inputTree("MangoTree", 3, 1.8, 7, true)
grove.inputTree("MangoTree", 5, 2.4, 12 ,true)
grove.inputTree("AppleTree", 4, 1.2, 5, true)
grove.inputTree("PearTree", 7, 2, 15, true)


for (let i = 0; i <= 8; i++) {
    console.log(`==================Ini Tahun Ke - ${i}, Pohon di Tanam di Taman==============`)
    grove.showAges() ;
    grove.showTrees() ;
    grove.showMatureTrees() ;
    grove.showDeadTrees() ;
    grove.nextYear()

    console.log(`\n`)
}

