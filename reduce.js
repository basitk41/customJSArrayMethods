// custom method implementation.
Array.prototype.myReduce = function (callback, init) {
  let result;
  const array = [...this];
  typeof init !== "undefined" ? (result = init) : (result = array.shift());
  for (let i = 0; i < array.length; i++) {
    result = callback(result, array[i]);
  }
  return result;
};

// example
const array = [1, 2, 3];
const result = array.myReduce((x, y) => x + y);
console.log(result);
console.log(array);
