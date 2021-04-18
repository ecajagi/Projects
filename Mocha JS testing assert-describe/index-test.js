const assert = require("assert");
const Rooster = require("../index");

describe("Rooster", () => {
  describe(".announceDawn", () => {
    it("returns a rooster call", () => {
      //setup
      const expected = "cock-a-doodle-doo!";
      //exercise
      const actual = Rooster.announceDawn();
      //verify
      assert.strictEqual(actual, expected);
    });
  });

  describe(".timeAtDawn", () => {
    it("returns its argument as a string", () => {
      //setup
      const inputNumber = 6;
      const expected = "6";
      //exercise
      const actual = Rooster.timeAtDawn(inputNumber);
      //verify
      assert.strictEqual(actual, expected);
    });

    it("throws range error if given number is less than 0", () => {
      //setup
      const inputNumber = -1;
      const expected = RangeError();

      //verify
      assert.throws(() => {
        Rooster.timeAtDawn(inputNumber); //exercise in callback
      }, expected);
    });

    it("throws range error if given number is more than 23", () => {
      //setup
      const inputNumber = 24;
      const expected = RangeError();

      //verify
      assert.throws(() => {
        Rooster.timeAtDawn(inputNumber); //exercise in callback
      }, expected);
    });
  });
});