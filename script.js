function getComputerChoice() {
    let choice = Math.random()
    if (choice < 0.33) {
        console.log('Rock!');
    } else if (choice >= 0.33 && choice <= 0.66) {
        console.log('Paper!');
    } else if (choice > 0.66) {
        console.log('Scissor!');
    }
}


