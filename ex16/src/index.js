function checkSign(num) {
    // Change code below this line
    if (num > 0) {
        return "positive";
    }
    if (num < 0) {
        return "negative"
        
    } else {
        return "zero"
        
    }
    // Change this code above this line

}
checkSign();
console.log(checkSign(10));
console.log(checkSign(-12));
console.log(checkSign(0));

module.exports = checkSign;