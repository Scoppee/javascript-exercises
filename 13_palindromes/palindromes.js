const palindromes = function (word) {
    let wordWithoutPunct = word.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let newString = "";
    for (let i = wordWithoutPunct.length - 1; i >= 0; i--) {
        newString += wordWithoutPunct[i]; 
    }
   
    return newString === wordWithoutPunct;
};

// Do not edit below this line
module.exports = palindromes;
