function myForLoop1 () {
       
// Only change below above this line
    var evenNumber = "0, 2, 4, 6, 8";
        for(var i = 0; i < evenNumber.length; i++);
    return evenNumber;
    // Only change code above this line
}
function myForLoop2 () {
       
    // Only change below above this line
        var evenInverseNumbers = "8, 6, 4, 2, 0";
        for(var i = 0; i > evenNumber.length; i++);
        return evenInverseNumbers;
    // Only change code above this line
    }


console.log(myForLoop1());
console.log(myForLoop2());

module.exports = {
    myForLoop1,
    myForLoop2
};