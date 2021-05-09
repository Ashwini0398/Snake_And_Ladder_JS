let constant = require('./constants')

class DiceRoll{    
    insert(){
        let player1 = constant.readline.question("Enter the player name: ");
        console.log(`Player1 name ${player1}`);
        console.log(`${player1} position now => ${constant.plr1_pos}`);
    }
}

module.exports = DiceRoll;