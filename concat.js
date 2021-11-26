// custom method implementation.
Array.prototype.myConcat = function (arr) {
  return [...this, ...arr];
};

// example
const array = [1, 2, 3];
const result = array.myConcat([4, 5, 6]);
console.log(result);
console.log(array);
