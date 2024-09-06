function getComputerChoice() {
    let choice = Math.random()
    if (choice < 0.33) {
        return ('Rock!');
    } else if (choice >= 0.33 && choice <= 0.66) {
        return ('Paper!');
    } else if (choice > 0.66) {
        return ('Scissor!');
    }
}
 
let input = prompt('Rock, Paper, or Scissor?')

function getHumanChoice() {
    let input2 =  input.toLowerCase();
    switch (input2) {
        case 'rock':
            return 'rock'
            break;
        case 'paper':
            return 'paper'
            break;
        case 'scissor':
            return 'scissor'
            break;
    }

}



