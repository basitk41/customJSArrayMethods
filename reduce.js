// custom method implementation.
Array.prototype.myReduce = function (callback, init) {
  let result;
  typeof init !== "undefined" ? (result = init) : (result = this[0]);
  for (let i = 1; i < this.length; i++) result = callback(result, this[i]);
  return result;
};

// example
const array = [1, 2, 3];
const result = array.myReduce((x, y) => x + y);
console.log(result);
console.log(array);
