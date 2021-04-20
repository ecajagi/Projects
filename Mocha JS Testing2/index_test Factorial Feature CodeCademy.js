var assert = require("assert");
const { isMainThread } = require("worker_threads");
var Calculate =  require('../index.js')


//1of11 In your index_test.js file, add an it statement, and then fill in the error message to state that it will test if the output of 5! is equal to 120.
describe('Calculate', () => {
  describe('.factorial', () => {
    it('test if the output of 5! is 120', () => {
      //Setup
      const expectedResult = 120;
      //Exercise
      const inputNumber = 5;
      const result = Calculate.factorial(inputNumber);
      //Verify
      assert.equal(result, expectedResult);
    });
    it('test if the output of 3! is 6', () => {
      //Setup
      const expectedResult = 6;
      //Exercise
      const inputNumber = 3;
      const result = Calculate.factorial(inputNumber);
      //Verify
      assert.equal(result, expectedResult);
    });
    it('test if output of 0! is 1', () => {
      //Setup
      const expectedResult = 1;
      //Exercise
      const inputNumber = 0;
      const result = Calculate.factorial(inputNumber);
      //Verify
      assert.equal(result, expectedResult);
    });
  });
});