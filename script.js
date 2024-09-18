const a = 'rock'
const b = 'paper'
const c = 'scissor'

function getComputerChoice() {
    let result = Math.ceil(Math.random() * 3)
    if (result == 1) {
        return a
    } else if (result == 2) {
        return b
    } else {
        return c
    }
}

function getHumanChoice() {
    let input = prompt('Choose your weapon:')
    let input2 = input.toLowerCase()
    switch (input2){
        case a:
            return a
            break;
        case b:
            return b
            break;
        case c:
            return c
            break;
        default:
            alert('Invalid choice!')
    }

}


function playGame() {
    let humanScore = 0
    let computerScore = 0

function playRound(para1, para2) {
    if (para1 == para2){
        alert(`It's a tie, ${para1} and ${para2} are equal!`)
    } else if ((para1 == a && para2 == c) || (para1 == b && para2 == a) || (para1 == c && para2 == b)) {
        alert(`You win! ${para1} beats ${para2}!`)
        console.log(`Your score = ${++humanScore}`)
    } else if ((para1 == c && para2 == a) || (para1 == a && para2 == b) || (para1 == b && para2 == c)) {
        alert(`You lose! ${para2} beats ${para1}!`)
        console.log(`Computer score = ${++computerScore}`)
    } else {console.log(`you fucked up`)}
}
// the first else if statement is the condition for para1 (the player) to win, and the second is the reverse, for the computer to win

playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());
playRound(getHumanChoice(), getComputerChoice());

if (humanScore > computerScore) {
    alert('You win!')
} else if (humanScore == computerScore) {
    alert("it's a tie!")
} else {
    alert('You lose!')
}

}

playGame();

