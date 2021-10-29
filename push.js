// custom method implementation.
Array.prototype.myPush = function (...x) {
  let length = this.length;
  for (let i = 0; i < x.length; i++) {
    this[length] = x[i];
    length++;
  }
  return length;
};

// example
const array = [1, 2, 3];
console.log(array.myPush(4, 5));
console.log(array);
