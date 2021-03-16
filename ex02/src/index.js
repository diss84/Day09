function myFunction(myParameter) {
    if(myParameter) {
        // Only change code below this line
        return "The parameter is true!";
    
    }
    return "The parameter is false!";
    // Only change code above this line
}
console.log(myFunction(true));
console.log(myFunction(false));

module.exports = myFunction;