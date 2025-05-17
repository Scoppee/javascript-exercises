const findTheOldest = function(array) {
    let eldest = array.reduce((accumulator, currentvalue) => {
        if(accumulator.yearOfDeath === undefined){
            accumulator["yearOfDeath"] = new Date().getFullYear()     
        }
        if(currentvalue.yearOfDeath === undefined){
            currentvalue["yearOfDeath"] = new Date().getFullYear()        
        }
        return (accumulator.yearOfDeath - accumulator.yearOfBirth) > (currentvalue.yearOfDeath - currentvalue.yearOfBirth) ? accumulator : currentvalue;
    })
    return eldest
};

// Do not edit below this line
module.exports = findTheOldest;
