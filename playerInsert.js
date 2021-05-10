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
        while (playerPos <= 100){
            dice = roll.diceRoll();
            option = roll.checkOption();
            console.log(`\nDice Rolled : ${dice}`);
            switch(option){
                case 1: 
                    playerPos += dice; 
                    console.log(`Yeah! You got a Ladder`);
                    break;
                case 2:
                    if (playerPos >= 0){
                        playerPos -= dice;                
                        console.log(`Snake bits you`);
                        break;
                    }
                    else{
                        playerPos = 0;
                        console.log('Player position 0');
                        break;
                    }
                case 3:               
                    console.log(`Pass the chance`);
                    break;
            }
            console.log(`Your position is : ${playerPos}`);;
        }     
        console.log("---------------------------------------------------");
        return `you win at position ${playerPos}`


    }

}

module.exports = {PlayerInsert};