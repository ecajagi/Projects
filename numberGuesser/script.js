let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
     return Math.floor(Math.random() * 9);
};

const compareGuesses = (user, computer, targetNumber) => {
    checkUserGuess(user);
     let userGuess = getAbsoluteDistance(user,targetNumber);
     let computerGuess = getAbsoluteDistance(computer,targetNumber);
     if(userGuess <= computerGuess ){
        return true;
    } else {
        return false;
    }
};

const checkUserGuess = humanGuess => {
  if(humanGuess < 0 || humanGuess > 9){
    alert('The number is out of range. Please make sure that the number is between 0 and 9');
  }
};

const getAbsoluteDistance = (guess,target)=> {
   return  Math.abs(target - guess);    
};

const updateScore = winner => {
    if(winner === 'human'){
        humanScore++;
    }
    if( winner === 'computer'){
        computerScore++;
    }
};

const advanceRound = () => {
    currentRoundNumber++;
};