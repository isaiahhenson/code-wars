//Integers, decimal, or both will be entered. Negitive or positive
//The function needs to return the inputed integer's opposite number. The inverse.
//1: -1 / 14: -14 / -34: 34
//integer will be entered. if positive - subtract then return (number * number).
//If negitive add then return (number * number).
//METHOD 2 - return the number * -1

// function inverse(integer) {
//   if (integer == 0) {
//     return 0;
//   }
//   if (integer > 0) {
//     console.log(integer - (integer + integer));
//   } else if (integer < 0) {
//     console.log(integer - (integer + integer));
//   }
// }

// inverse(-5);

// function inverse(integer) {
//   if (integer == 0) {
//     return 0;
//   }
//   if (integer > 0) {
//     return integer - (integer + integer);
//   } else if (integer < 0) {
//     return integer - (integer + integer);
//   }
// }

//a string will be entered
//function will return a string reversed
//'world'  =>  'dlrow'
//enter the string, use the split method, revese method then the join method to reverse the string.

// function solution(str) {
//   console.log(str.split('').reverse().join(''));
// }

// solution('Hello Isaiah');

//this function will take in a boolean value of true or false
//will return a string value of yes or no
//    assert.strictEqual(boolToWord(true), 'Yes')
//assert.strictEqual(boolToWord(false), 'No')
// receive boolean if true return "Yes" else return "No"

function boolToWord(bool) {
  return bool ? 'Yes' : 'No';
}

boolToWord(true);
