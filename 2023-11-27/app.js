//insert an arr
//will return arr accumalated 
//[a,b,c] --> [b + c] if positive
//[a,b,c] --> [b + c] = [answer]

function positiveSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        if(arr[i] > 0){
            console.log(arr[i])
            sum += arr[i]
        }
    }
    console.log(sum)
    return sum;
}

positiveSum([1,2,3,4,5,6])

//not even sum
//positive sum
