//This function will recieve a sting input
//this function will return a number type representitive of the string
//Test.assertEquals(stringToNumber("1234"),1234)
//Test.assertEquals(stringToNumber("605"), 605)
//Test.assertEquals(stringToNumber("1405"),1405)
//Test.assertEquals(stringToNumber("-7"),  -7)
//This function will intake string '567' --> return 567 not string

const stringToNumber = function (str) {
  let newStr = +str;
  console.log(typeof newStr);
  return newStr;
};

stringToNumber('567');
