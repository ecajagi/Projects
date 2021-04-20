const Calculate = {
  factorial(inputNumber) {
    if (inputNumber === 0){
      return 1;
    };
    let factorialResult = inputNumber;
    for (let i = inputNumber - 1; i > 0; i--) {
      factorialResult *= i;
    };
    return factorialResult; 
  }
}

module.exports = Calculate;