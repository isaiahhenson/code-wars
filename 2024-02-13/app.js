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

// function squareSum(numbers) {
//   let sum = numbers.reduce((acc, current) => {
//     return acc + current * current;
//   }, 0);
//   console.log(sum);
// }
// squareSum([1, 2]);

//an array will be entered into function
//the function will return a integer number which is the smallest
//[34, 15, 88, 2] --> 2
//Initialize a variable, set it to the first element in the array. them compare the remaining elements to that variable. If they are less then I will reassign the array.

function findSmallestInt(args) {
  let smallNum = args[0];
  for (let i = 0; i < args.length; i++) {
    if (args[i] < smallNum) {
      smallNum = args[i];
    }
  }
  return smallNum;
}

findSmallestInt([78, 56, 232, 12, 0]);
