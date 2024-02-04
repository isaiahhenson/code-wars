//1.The childs birthdate will be entered
//2. how will he be in a certain year or will be born in certain year
//3. OUTPUT will be "You are ... year(s) old." /"You will be born in ... year(s)."

function calculateAge(birthYear, year){
if (birthyear === year){
    return "You were born this very year!"
}else if (birthYear === year - 1 ) {
    return "You are 1 year old."
}else if (birthYear < year){
    let count = 0;
    for(let i = birthYear; i < year; i++){
        count += 1
    }
    return `You are ${count} years old.`
}else {
    if (birthYear > year){
        let count = 0;
        for(let i = birthYear; i > year; i--){
            count += 1
        }
        return `You will be born in ${count} years.`
    }
}
}

calculateAge(2028, 2023)