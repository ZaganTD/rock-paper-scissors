let a = 'rock'
let b = 'paper'
let c = 'scissor'

function getComputerChoice() {
    let result = Math.ceil(Math.random() * 3)
    if (result == 1) {
        return 'rock'
    } else if (result == 2) {
        return 'paper'
    } else {
        return 'scissor'
    }
}

let humanScore = 0
let computerScore = 0
const humScore = document.querySelector('.humScore')
const compScore = document.querySelector('.compScore')
const roundResult = document.querySelector('.roundResult')
humScore.textContent = `Human score: ${humanScore}`
compScore.textContent = `Computer score: ${computerScore}`

    function playRound(para1, para2) {
        if (para1 == para2){
            alert(`It's a tie, ${para1} and ${para2} are equal!`)
            roundResult.textContent = 'Tie'
        } else if ((para1 == a && para2 == c) || (para1 == b && para2 == a) || (para1 == c && para2 == b)) {
            alert(`You win! ${para1} beats ${para2}!`)
            humScore.textContent = `Human score: ${++humanScore}`
            roundResult.textContent = 'YOU WIN'
        } else if ((para1 == c && para2 == a) || (para1 == a && para2 == b) || (para1 == b && para2 == c)) {
            alert(`You lose! ${para2} beats ${para1}!`)
            compScore.textContent = `Computer score: ${++computerScore}`
            roundResult.textContent = 'YOU LOST'
        } else {console.log(`you fucked up`)}

        if (humanScore == 5) {
            roundResult.textContent = 'THE GAME IS OVER, YOU HAVE WON'
        } else if (computer == 5) {
            roundResult.textContent = 'THE GAME IS OVER, YOU HAVE LOST'
        }
}
// the first else if statement is the condition for para1 (the player) to win, and the second is the reverse, for the computer to win



const container = document.querySelector('#container')
container.addEventListener('click', (e)=> {
    let humanChoice = e.target.textContent.toLowerCase()
    playRound(humanChoice, getComputerChoice())
})