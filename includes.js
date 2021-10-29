// custom method implementation.
Array.prototype.myIncludes = function (x) {
  for (let i = 0; i < this.length; i++) {
    if (this[i] === x) return true;
  }
  return false;
};

// example
const array = [1, 2, 3];
console.log(array.myIncludes(6));
