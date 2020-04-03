const MangoTree = require('./mango_tree.js');
const AppleTree = require('./apple_tree.js');
const PearTree = require('./pear_tree.js');

class TreeGrove {
    constructor() {
        this.grove = []
    }

    inputTree(name, age, height, matureAge, healthStatus) {
        if (name === 'MangoTree') {
            this.grove.push(name, age, height, matureAge, healthStatus)
        } else if (name === 'AppleTree') {
            this.grove.push('name, age, height, matureAge, healthStatus')
        } else if (name === 'PearTree') {
            this.grove.push('name, age, height, matureAge, healthStatus')
        } else {
            console.log('kamu siapa ? :(')
        }
    }

    nextYear() {

    }

    showAges() {

    }

    showTrees() {

    }

    showmatureTrees() {

    }

    showDeadTrees() {
        
    }
}