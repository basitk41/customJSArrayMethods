// custom method implementation.
Array.prototype.myFilter = function (callback) {
  const newArray = [];
  for (let i = 0; i < this.length; i++) {
    const result = callback(this[i], i, this);
    if (result) newArray.push(this[i]);
  }
  return newArray;
};

// example
const array = [1, 2, 3];
const result = array.myFilter((x) => x !== 2);
console.log(result);
