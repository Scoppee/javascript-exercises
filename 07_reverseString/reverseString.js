const reverseString = function(string) {
    let stringLength = string.length;
    let newString = "";

    for (let i = 1; i <= stringLength; i++) {
        newString += string[stringLength - i];
        
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
