// custom method implementation.
Array.prototype.myUnshift = function (...args) {
  const arr = [...args, ...this];
  for (let i = 0; i < arr.length; i++) {
    this[i] = arr[i];
  }
  return this.length;
};

// example
const array = [1, 2, 3];
console.log(array.myUnshift(1, 2));
// console.log(array.unshift(1, 2));
console.log(array);
