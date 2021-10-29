// custom method implementation.
Array.prototype.myFindIndex = function (callback) {
  for (let i = 0; i < this.length; i++) {
    const result = callback(this[i], i, this);
    if (result) return i;
  }
  return -1;
};

// example
const array = [1, 2, 3];
const result = array.myFindIndex((x) => x === 3);
console.log(result);
