function logicOrder(num) {
    // Change code below this line
    if(num < 50) { return "Less than 50";
}   
    else if (num < 100) { return "Less than 100";
    }
    else {return "Greater than or equal to 100";
}
    // Change code above this line
}

logicOrder();
console.log(logicOrder(28));
console.log(logicOrder(60));
console.log(logicOrder(110));

module.exports = logicOrder;
