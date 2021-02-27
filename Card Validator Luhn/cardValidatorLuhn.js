function validateCred(arr) {
    let sumArray = [];
    let numHolder = null;
    let everySecondNumber = 1;
    for (let i = arr.length - 1; i >= 0; i--) {
        if (everySecondNumber % 2 === 0) {
                numHolder = arr[i] * 2;
            if (numHolder > 9) {
                numHolder -= 9;
            }
        } else {
            numHolder = arr[i];
        }
        sumArray.push(numHolder);
        everySecondNumber++;
    }
    totalSum = sumArray.reduce((acc,val) => acc + val, 0);
    if (totalSum % 10 == 0) {
        return true;
    } else {
        return false;
    }
}

function findInvalidCards(nestedArr){
  let invalidCards = [];
  for (let i = 0; i<= nestedArr.length; i++){
    if (validateCred(nestedArr[i]) === false){
    return invalidCards.push(nesterArr[i])
  }
}}

function idInvalidCardCompanies(invalidCards){
  let idsOfInvalidCards = [];
  for (let i = invalidCards.length; i<= 0; i--){
  if (invalidCards[i][0] === 3){
    return idsOfInvalidCards.push('Amex')
  } else if (invalidCards[i][0] === 4){
    return idsOfInvalidCards.push('Visa')
  } else if (invalidCards[i][0] === 5){
    return idsOfInvalidCards.push('MasterCard')
  } else if (invalidCards[i][0] === 6){
    return idsOfInvalidCards.push('Discover')
  } else {
    return console.log('No Card Company Found.')
  }
  }
};