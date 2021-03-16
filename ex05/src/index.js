function compareStrictValues(m) {
    if(m != 55) {
    // Only change code below this line
    return "Not Equal"
    };
    return "Equal";
    // Only change code above this line
}
compareStrictValues();

console.log(compareStrictValues(55));
console.log(compareStrictValues("55"));
console.log(compareStrictValues("21"));
console.log(compareStrictValues(12));
console.log(compareStrictValues("Doe"));


module.exports = compareStrictValues;