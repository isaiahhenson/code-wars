//this function will take two parameters
//one integer and one string
//this function will return that sring 'n' number of times.
//will have no spaces
//6, "I"     -> "IIIIII"
//5, "Hello" -> "HelloHelloHelloHelloHello"

function repeatStr(n, s) {
  let str = [];
  for (let i = 0; i < n; i++) {
    str.push(s);
  }
  str = str.join('');
  console.log(str);
}

repeatStr(5, '#');
