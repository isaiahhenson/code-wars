//This function will recieve a sting input
//this function will return a number type representitive of the string
//Test.assertEquals(stringToNumber("1234"),1234)
//Test.assertEquals(stringToNumber("605"), 605)
//Test.assertEquals(stringToNumber("1405"),1405)
//Test.assertEquals(stringToNumber("-7"),  -7)
//This function will intake string '567' --> return 567 not string

// const stringToNumber = function (str) {
//   let newStr = +str;
//   return newStr;
// };

// stringToNumber('567');

//Tried to recreat using a IIFE

// (function (num = '561') {
//   console.log(typeof num);
//   let newNum = +num;
//   console.log(typeof newNum);
//   return newNum;
// })();

//This function will receive a string value
//Number value will be returned, amount of vowels string.
//the word count has 2 vowel numbers. return 2
// if letters are present add it too word count.

function getCount(str) {
  let strCount = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === 'a' ||
      str[i] === 'e' ||
      str[i] === 'i' ||
      str[i] === 'o' ||
      str[i] === 'u'
    ) {
      console.log(str[i]);
      strCount++;
    }
  }
  console.log(strCount);
  return 0;
}

getCount('apple');
