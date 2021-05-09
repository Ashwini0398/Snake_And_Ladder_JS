let rand = 0;
class DiceRoll{
    diceRoll(){
        rand = Math.floor(Math.random() * 10 ) % 6 + 1;
        return "Dice Shows : "+rand;
    }
}

module.exports = {DiceRoll}