// custom method implementation.
Array.prototype.myMap = function (callback) {
  for (let i = 0; i < this.length; i++) {
    this[i] = callback(this[i], i, this);
  }
  return this;
};

// example
const array = [1, 2, 3];
const result = array.myMap((x) => x * 2);
console.log(result);
