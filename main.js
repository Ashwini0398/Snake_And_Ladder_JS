let playerInsert = require('./playerInsert')

let start = 0;
class SnakeLadderMain{
    display(){
        console.log("Welcome!! to our snake and ladder game");
        console.log("--------------------------------------");
        let snakeLadder = new playerInsert.PlayerInsert(start);
        return snakeLadder.play();
    }
}

let game = new SnakeLadderMain();
console.log(game.display());