const add = function (x, y) {
  return x + y
};

const subtract = function (x, y) {
  return x - y
};

const sum = function (arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
};

const multiply = function (arr) {
  return arr.reduce((acc, curr) => acc * curr);
};

const power = function (x, y) {
  return x ** y
};

const factorial = function (num) {
  let count = 1
  if (num == 0) {
    return 1
  };
  for (let i = num; i >= 1; i--) {
    count *= i
  }
  return count
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
