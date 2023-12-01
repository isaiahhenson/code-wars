//a number with be incerted into the functin
//a negitive number with be returned
//(5) -> (-5)
//5 is entered if already negitive return the num as is if positive change into negitive then return.

function makeNegative(num) {
    return num < 0 ? num : num - ( num * 2 )
}

console.log(makeNegative(9))

//complete 


