// custom method implementation.
Array.prototype.myPush = function (...x) {
  for (let i = 0; i < x.length; i++) this[this.length] = x[i];
  return this.length;
};

// example
const array = [1, 2, 3];
console.log(array.myPush(4, 5, 6));
console.log(array);
