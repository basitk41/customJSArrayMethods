// custom method implementation.
Array.prototype.myShift = function () {
  const x = this[0];
  for (let i = 1; i < this.length; i++) this[i - 1] = this[i];
  this.length = this.length > 0 ? this.length - 1 : 0;
  return x;
};

// example
const array = [1, 2, 3, 4];
console.log(array.myShift());
// console.log(array.shift());
console.log(array);
