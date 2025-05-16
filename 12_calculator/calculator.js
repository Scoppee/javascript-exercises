const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2
};

const sum = function(array) {
  if(array.length === 0){
    return 0
  }else{
    return array.reduce((accumulator, currentValue) => 
      accumulator + currentValue, 0
    )
  }
};

const multiply = function(array) {
  if(array.length === 0){
    return 0
  }else{
    return array.reduce((accumulator, currentValue) => 
      accumulator * currentValue, 1
    )
  }
};

const power = function(number, power) {
  let result = 1
	for (let i = 0; i < power; i++) {
    result *= number
  }
  return result;
};

const factorial = function(number) {
  if (number === 0 || number === 1){
    return 1;
  }else{
    let result = 1
    for (let i = 0; i < number; i++) {
      result *= i+1
    }
    return result;
  }

};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
