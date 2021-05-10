let constant = require('./constants')
let rand = 0;
let randOp = 0;
class DiceRoll{
    diceRoll(){
        rand = Math.floor(Math.random() * 10 ) % 6 + 1;
        return rand;
    }

    checkOption(){
        randOp = Math.floor(Math.random() * 10 ) % 3 + 1;
        switch(randOp){
            case 1: 
                return constant.LADDER;
            case 2:
                return constant.SNAKE;
            case 3:
                return constant.NO_PLAY;
        }
    }
}

module.exports = {DiceRoll}