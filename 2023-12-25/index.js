// 39.99 becomes $39.99

// The rest of your team will make sure that the argument is sanitized before being passed to your function although you will need to account for adding trailing zeros if they are missing (though you won't have to worry about a dangling period).

// Examples:

// 3 needs to become $3.00

// 3.1 needs to become $3.10

//A number will be inserted into the function
//the funtion will return 1 - 2 zeros to the input
// 3 --> 3.00 / 3.1 --> 3.10
// formatMoney (5) if single add two zeros, if double add one, return once concatenated.


function formatMoney(amount){
   let newAmount = amount.toString()
    console.log(newAmount.length)
    if (newAmount.length === 1 ){
        amount = amount.toString() + 0 + 0;
    } else {
        amount = amount.toString() + 0;

    }
    console.log(amount)

}

formatMoney(1)