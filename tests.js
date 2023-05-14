/* 
  Copyright (c) 2023 Promineo Tech
  Author:  Promineo Tech Academic Team
  Subject:  JavaScript Mocha/Chai
  FE Lab Week 06
*/
const expect = chai.expect
const assert = chai.assert

/* ----------------------------------------------------- */
// Resources:
// expect Documentation: https://www.chaijs.com/api/bdd/
// assert Documntation: https://www.chaijs.com/api/assert/
//
// assert is very similar to how you use expect, but offers
// extra ways to test.

/* ----------------------------------------------------- */
// Please do not alter the existing code unless instructed to do so.
// Read the comments and add your code where it is specified for each question.
/* ----------------------------------------------------- */

/**
 *          YOU MUST 'npm install' IN YOUR TERMINAL TO INSTALL MOCHA/CHAI 
 *          FROM THE DEPENDENCIES IN YOUR PACKAGE.JSON
 * 
 *  Step 1: Create a describe code block that describes what you expect the code to do.
 *  Step 2: Copy/Paste your debugged code from week6Lab.js into the describe block (exclude the final console.log())
 *  Step 3: Create tests using expect/assert to test for expected outputs. Use multiple cases.
 *          If you're testing against an array/object - read the documentation on .deep/.deepEquals
 *
 *  Note:   Mocha/Chai is currently set up to only run in your given index.html. 
 *          expect/assert are given to you at the top of the code. 
 * 
 *          By default, the tests will pass unless you give it code to test against.
 * 
/*--------------------------------------------------------------------*/

describe('Week 6 Lab Tests:', () => {
  describe('Example Question Test: Add Two Numbers', () => {
    it('#Should return the sum of two numbers', () => {
      // Copy & paste your debugged code from week6Lab.js
      function addTwoNumbers(num1, num2) {
        return num1 + num2
      }
      // Write tests to ensure it works for multiple examples
      expect(addTwoNumbers(2, 3)).to.equal(5)
      expect(addTwoNumbers(9, 17)).to.equal(26)
      expect(addTwoNumbers(750, 250)).to.equal(1000)
      expect(addTwoNumbers(132780, 443378)).to.equal(576158)
    })

    describe('Example Failed Test: Add Two Numbers', () => {
      it('#Should fail', () => {
        function sumOfTwoNumbers(num1, num2) {
          num1 + num2
        }

        expect(sumOfTwoNumbers(2, 3)).to.equal(5)
      })
    })
  })
  /*--------------------------NEW TESTS BELOW-------------------------------*/
})


describe("Created Week 6 Lab Tests: ", () => {
    describe("Question 1a: Sorted Array", () => {
      it("#Should sort the array in numerical order", () => {
          const arrayOfNumbers = [1, 5, 3, 2, 4]
          arrayOfNumbers.sort();

          expect(arrayOfNumbers).to.deep.equal([ 1, 2, 3, 4, 5])
      })

    describe("Question 1b: Manage my Wallet", () => {
        class Wallet {
          constructor(money) {
            this.money = money;
          }
          addMoney(amount) {
            this.money += amount;
          }
          removeMoney(amount) {
            this.money -= amount;
          }
        }

      it("#It should remove money then add money to result in $88.01", () => {
        const myWallet = new Wallet(100);
        myWallet.removeMoney(14.99)
        myWallet.addMoney(3)
        expect(myWallet.money).to.equal(88.01);
      });
    });

    describe("The number is to correspond with its delegated day of the week", () => {

        const dayOfTheWeek = (num) => {
          switch (num) {
            case 1:
              return 'Monday';
            case 2:
              return 'Tuesday';
            case 3:
              return 'Wednesday';
            case 4:
              return 'Thursday';
            case 5:
              return 'Friday';
            case 6:
              return 'Saturday';
            case 7:
              return 'Sunday';
            default:
              console.log('Err. Something went wrong.')
          }
        }

      it("#The outcome should be Wednesday to correspond with the input of 3", () => {
        expect(dayOfTheWeek(3)).to.equal('Wednesday');
      });
    });
  describe("Question 1d: Wizards", () => {

    const movieCharacters = [
      {
        name: 'Howl',
        isAWizard: true,
        quote: `You're wearing that hat? After all the magic I used to make your dress pretty?`,
      },
      {
        name: 'Kalcifer',
        isAWizard: false,
        quote: `I don't cook! I'm a scary and powerful fire demon!`,
      },
      {
        name: 'Gandalf',
        isAWizard: true,
        quote: `You shall not pass!`,
      },
      {
        name: 'Luke Skywalker',
        isAWizard: false,
        quote: `May the Force be with you.`,
      },
    ]  

    function onlyWizards(arrayOfCharacters) {
      return arrayOfCharacters.filter((character) => character.isAWizard == true)
    }

    it('#Should return an array of objects... object.isAWizard should be true', () => {
      
      for (let character of onlyWizards(movieCharacters)) {
        it('#Character should be a wizard', () => {
          expect(character.isAWizard).to.equal(true)
        })
      }
    })
  })
  });
});