let diceRoll = require('./diceRoll')
let roll = new diceRoll.DiceRoll();

let playerPos = 0;
let player = "Player";
let dice = 0, count = 0;
let option = 0;

class PlayerInsert{
    constructor(start){
        this.start = start;
    }
    
    play(){
        console.log(`position now : ${this.start}`);
        while (playerPos >= 0 && playerPos < 100){
            dice = roll.diceRoll();
            option = roll.checkOption();
            console.log(`\nDice Rolled : ${dice}`);
            count++;
            switch(option){
                case 1: 
                    playerPos += dice; 
                    console.log(`Yeah! You got a Ladder`);
                    if(playerPos > 100){
                        playerPos -= dice;
                    }
                    break;
                case 2:
                    playerPos -= dice;
                    console.log(`Snake bits you`);
                    if (playerPos < 0){
                        playerPos = 0;                 
                        console.log(`Player position 0`);
                    }
                    break;
                case 3:               
                    console.log(`Pass the chance`);
                    break;
            }
            console.log(`Your position is : ${playerPos}`);;
        }     

        console.log("---------------------------------------------------------------");
        this.plrResult(playerPos, count);
        return `Your winnig postion is ${playerPos}`;

    }

    plrResult(playerPos, count){
        console.log(`Dice Rolled ${count} times`);
        console.log("--------------------------------------------------------------");
        if(playerPos == 100){
            console.log('Congrats!!, YOU WIN');
        }
    }

}

module.exports = {PlayerInsert};