let diceRoll = require('./diceRoll')
let roll = new diceRoll.DiceRoll();

let playerPos = 0;
let player = "Player";
let dice = 0;
let option = 0;


class PlayerInsert{
    constructor(start){
        this.start = start;
    }
    
    play(){
        console.log(`position now : ${this.start}`);
        dice = roll.diceRoll();     //random value of dice will be get displayed
        option = roll.checkOption();   //check the options through random values
        console.log(`\nDice Rolled : ${dice}`);
        switch(option){
            case 1: 
                playerPos += dice; 
                console.log(`Yeah! You got a Ladder`);
                break;
            case 2:
                playerPos -= dice;                
                console.log(`Snake bits you`);
                break;
            case 3:               
                console.log(`Pass the chance`);
                break;
        }
        return `Your position is : ${playerPos}`;

    }
}

module.exports = {PlayerInsert};