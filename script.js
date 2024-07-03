
console.log('Helloooo peoplesss!!');

function getComputerChoice(){
    randomChoice = Math.floor((Math.random()*3));
    console.log(randomChoice);
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
    userChoice = prompt('Choose rock, paper or scissors!');
}
getComputerChoice()