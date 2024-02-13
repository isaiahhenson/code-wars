//this will take in a string
//to return the string with first & last characters removed
//'apple' --> 'ppl'
//I will use the slice method on the string
// function removeChar(str) {
//   let newStr = str.slice(1, -1);
//   return newStr;
// }

// removeChar('apple');

//this fuction will accept an array of numbers
//this function will square each number them add them together
//  assert.strictEqual(squareSum([1,2]), 5);
//assert.strictEqual(squareSum([0, 3, 4, 5]), 50);
//assert.strictEqual(squareSum([]), 0);
//loop through array squaring each number then add them. I will use the reduce method

function squareSum(numbers) {
  let sum = numbers.reduce((acc, current) => {
    return acc + current * current;
  }, 0);
  console.log(sum);
}
squareSum([1, 2]);
