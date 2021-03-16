function functionElse(num) {
    // Change code below this line
    if(num <= 5)
    return "5 or smaller"
    else{ (num > 5) 
        return "Bigger than 5"
    }
    // Change code above this line
}
functionElse();

console.log(functionElse(4));
console.log(functionElse(5));
console.log(functionElse(6));
console.log(functionElse(10));

module.exports = functionElse;
