const sumAll = function(from, to) {
    if (from < 0 || to < 0 || !Number.isInteger(from) || !Number.isInteger(to)){
        return "ERROR"
    }
    let sum = 0;

    if (from > to){
        for (let i = to; i <= from; i++) {
            
            sum += i;
        }
    }else{
        for (let i = from; i <= to; i++) {
            increment = from + i;
            sum += i;
        }
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
