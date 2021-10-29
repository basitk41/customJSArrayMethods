// custom method implementation.
Array.prototype.myFind = function (callback) {
  for (let i = 0; i < this.length; i++) {
    const result = callback(this[i], i, this);
    if (result) return this[i];
  }
};

// example
const array = [1, 2, 3];
const result = array.myFind((x) => x === 2);
console.log(result);
