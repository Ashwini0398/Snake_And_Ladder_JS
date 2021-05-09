let diceRoll = require('./diceRoll')
let roll = new diceRoll.DiceRoll();

let player = "player";

class PlayerInsert{
    constructor(start){
        this.start = start;
    }
    
    play(){
        console.log(`position now => ${this.start}`);
        return roll.diceRoll();

    }
}

module.exports = {PlayerInsert};