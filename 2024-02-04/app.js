//Integers, decimal, or both will be entered. Negitive or positive
//The function needs to return the inputed integer's opposite number. The inverse.
//1: -1 / 14: -14 / -34: 34
//integer will be entered. if positive - subtract then return (number * number).
//If negitive add then return (number * number).
//METHOD 2 - return the number * -1

function inverse(integer) {
  if (integer == 0) {
    return 0;
  }
  if (integer > 0) {
    console.log(integer - (integer + integer));
  } else if (integer < 0) {
    console.log(integer - (integer + integer));
  }
}

inverse(-5);

function inverse(integer) {
    if (integer == 0) {
    return 0;
  }
  if (integer > 0) {
    return integer - (integer + integer);
  } else if (integer < 0) {
    return integer - (integer + integer)
  }