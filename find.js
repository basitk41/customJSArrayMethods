// custom method implementation.
Array.prototype.myFind = function (callback) {
  for (let i = 0; i < this.length; i++) {
    const bool = callback(this[i], i, this);
    if (bool) return this[i];
  }
  return undefined;
};

// example
const array = [1, 2, 3];
const result = array.myFind((x) => x === 2);
console.log(result);
