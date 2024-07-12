

let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    randomChoice = Math.floor((Math.random()*3));
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

/*----------DOM--------*/
const rock = document.querySelector('#rock');
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", ()=>{
    playRound("rock", getComputerChoice())
    event.stopPropagation();
});
paper.addEventListener("click", ()=>{
    playRound("paper", getComputerChoice())
    event.stopPropagation();
});
scissors.addEventListener("click",()=>{
    playRound("scissors", getComputerChoice())
    event.stopPropagation();
});