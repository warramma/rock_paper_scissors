let humanScore = 0;
let computerScore = 0;
let rounds = 0;

//selectors
const displayedHumanScore = document.querySelector(".human");
const displayedCompScore = document.querySelector(".computer");
const scores = document.querySelector('scores');
const result = document.querySelector(".results");

//add scores to ui
displayedHumanScore.textContent = "You: " + humanScore;
displayedCompScore.textContent = "Computer: " + computerScore;
//scores.appendChild(displayedHumanScore);
//scores.appendChild(displayedCompScore);

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
        updateHuman(humanScore);
        const para = document.createElement("p");
        para.textContent = "You won! Rock beats scissors!";
        result.appendChild(para);
    }
    //human wins: scissors beats paper
    else if(humanChoice.toLowerCase() === 'scissors' && computerChoice.toLowerCase() === 'paper'){
        humanScore++;
        updateHuman(humanScore);
        const para = document.createElement("p");
        para.textContent = "You won! Scissors beats paper!";
        result.appendChild(para);
    }
    //human wins: paper beats rock
    else if(humanChoice.toLowerCase() === 'paper' && computerChoice.toLowerCase() === 'rock'){
        humanScore++;
        updateHuman(humanScore);
        const para = document.createElement("p");
        para.textContent = "You won! Paper beats rock!";
        result.appendChild(para);
    }
    //computer wins: rock
    else if(humanChoice.toLowerCase() === 'scissors' && computerChoice.toLowerCase() === 'rock'){
        computerScore++;
        updateComputer(computerScore);
        const para = document.createElement("p");
        para.textContent = "You lose! Rock beats scissors!";
        result.appendChild(para);
    }
    //computer wins: scissors
    else if(humanChoice.toLowerCase() === 'paper' && computerChoice.toLowerCase() === 'scissors'){
        computerScore++;
        updateComputer(computerScore);
        const para = document.createElement("p");
        para.textContent = "You lose! Scissors beats paper!";
        result.appendChild(para);
    }
    //computer wins: paper
    else if(humanChoice.toLowerCase() === 'rock' && computerChoice.toLowerCase() === 'paper'){
        computerScore++;
        updateComputer(computerScore);
        const para = document.createElement("p");
        para.textContent = "You lose! Paper beats rock!";
        result.appendChild(para);
    }
    //tie
    else{
        const para = document.createElement("p");
        para.textContent = "It\'s a draw!";
        result.appendChild(para);
    }
}

function updateHuman(newScore){
    displayedHumanScore.textContent = "You: " + newScore;
}
function updateComputer(newScore){
    displayedCompScore.textContent = "Computer: " + newScore;
}

//add buttons for user to play. Play round according to choice and display result, clear after each round
const rock = document.querySelector('#rock');
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");

rock.addEventListener("click", ()=>{
    rounds++;
    result.removeChild(result.firstChild);
    playRound("rock", getComputerChoice())
    event.stopPropagation();
    
    final(rounds);
});
paper.addEventListener("click", ()=>{
    rounds++;
    result.removeChild(result.firstChild);
    playRound("paper", getComputerChoice())
    event.stopPropagation();
    final(rounds);
});
scissors.addEventListener("click",()=>{
    rounds++;
    result.removeChild(result.firstChild);
    playRound("scissors", getComputerChoice())
    event.stopPropagation();
    
    final(rounds);
});

//display final results
function final(rounds){
    if(rounds == 5){
        //result.removeChild(result.firstChild);
        const para = document.createElement("p");
        const winner = document.createElement('p');
        para.textContent = 'After 5 rounds, the results are in!';
        result.appendChild(para);
        if(humanScore > computerScore){
            winner.textContent = 'You won!! You\'re a rock, paper, scissor champ! Humanity stands with YOU 🤩';
            result.appendChild(winner);
        }
        else if(computerScore > humanScore){
            winner.textContent = 'You LOST!😭 Computer supremacy';
            result.appendChild(winner);
        }else{
            winner.textContent = 'It\'s a draw!';
            result.appendChild(winner);
        }
        
    }
}
