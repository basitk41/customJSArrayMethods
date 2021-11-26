// custom method implementation.
Array.prototype.myMap = function (callback) {
  let result = [];
  for (let i = 0; i < this.length; i++) result[i] = callback(this[i], i, this);
  return result;
};

// example
const array = [1, 2, 3];
const result = array.myMap((x) => x * 2);
console.log(result);
console.log(array);
