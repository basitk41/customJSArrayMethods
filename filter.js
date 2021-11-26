// custom method implementation.
Array.prototype.myFilter = function (callback) {
  const result = [];
  for (let i = 0; i < this.length; i++)
    callback(this[i], i, this) && (result[result.length] = this[i]);
  return result;
};

// example
const array = [1, 2, 3];
const result = array.myFilter((x) => x !== 2);
console.log(result);
