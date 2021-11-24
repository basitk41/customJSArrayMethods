// custom method implementation.
Array.prototype.myShift = function () {
  const x = this[0],
    len = this.length;
  for (let i = 1; i < len; i++) {
    this[i - 1] = this[i];
  }
  this.length = len - 1;
  return x;
};

// example
const array = [1, 2, 3];
console.log(array.myShift());
console.log(array);
