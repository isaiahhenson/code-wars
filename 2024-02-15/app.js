//the fuction will take in a positive integer
//the function will return the summation of one to input number.
//1 + 2 + 3 --> 6
//2 + 4 + 6 --> 12
//create a for loop, begain it let i = 1;
// create a total variable starting a 0, adding i each iteration up untill and including the input number.

var summation = function (num) {
  let total = 0;
  for (let i = 1; i <= num; i++) {
    total += i;
  }
  return total;
};

summation(8);
