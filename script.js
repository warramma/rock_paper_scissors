
//console.log('Helloooo peoplesss!!');

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    randomChoice = Math.floor((Math.random()*3));
    //console.log(randomChoice);
    if(randomChoice === 0){
        return 'rock';
    }else if(randomChoice === 1){
        return 'paper';
    }else if(randomChoice === 2){
        return 'scissors';
    }else{
        return parseInt(randomChoice) + ' is an invalid choice';
    }
}
function getHumanChoice(){
    return userChoice = prompt('Choose rock, paper or scissors!');
    /*
    if(userChoice.toLowerCase()==='rock'){
        return 'rock';
    }
    if(userChoice.toLowerCase()==='paper'){
        return 'paper';
    }
    if(userChoice.toLowerCase()==='scissors'){
        return 'scissors';
    }
    */
}

function playRound(humanChoice, computerChoice){
    //human wins: rock beats scissors
    if(humanChoice.toLowerCase() === 'rock' && computerChoice.toLowerCase() === 'scissors'){
        humanScore++;
        console.log('You won! Rock beats scissors!');
    }
    //human wins: scissors beats paper
    else if(humanChoice.toLowerCase() === 'scissors' && computerChoice.toLowerCase() === 'paper'){
        humanScore++;
        console.log('You won! Scissors beats paper!');
    }
    //human wins: paper beats rock
    else if(humanChoice.toLowerCase() === 'paper' && computerChoice.toLowerCase() === 'rock'){
        humanScore++;
        console.log('You won! Paper beats rock!');
    }
    //computer wins: rock
    else if(humanChoice.toLowerCase() === 'scissors' && computerChoice.toLowerCase() === 'rock'){
        computerScore++;
        console.log('You lose! Rock beats scissors!');
    }
    //computer wins: scissors
    else if(humanChoice.toLowerCase() === 'paper' && computerChoice.toLowerCase() === 'scissors'){
        computerScore++;
        console.log('You lose! Scissors beats paper!');
    }
    //computer wins: paper
    else if(humanChoice.toLowerCase() === 'rock' && computerChoice.toLowerCase() === 'paper'){
        computerScore++;
        console.log('You lose! Paper beats rock!');
    }
    //tie
    else{
        console.log('It\'s a draw!');
    }

}
function playGame(){
    //play 5 rounds 
    for(let i = 0; i < 5; i++){
        const computer = getComputerChoice();
        console.log(`computer: ${computer}`);
        const human = getHumanChoice();
        console.log(`human: ${human}`);
        playRound(human, computer);
    }
    console.log('Results>>>\nComputer Score = '+ computerScore + '\nHuman Score = ' + humanScore);

    if(humanScore > computerScore){
        console.log('You\'ve won!! o((>ω< ))o (☆▽☆)');
    }else if(computerScore > humanScore){
        console.log('You lost lol try again ＼（〇_ｏ）／');
    }else{
        console.log('It\'s a tie! (⌐■_■)');
    }
}


//------------ PLAY GAME -----------------

//const computer = getComputerChoice();
//console.log(`computer: ${computer}`);
//const human = getHumanChoice();
//console.log(`human: ${human}`);
//playRound(human, computer);
playGame();


