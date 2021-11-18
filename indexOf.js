// custom method implementation.
Array.prototype.myIndexOf = function (element, startIndex) {
  for (let i = startIndex ? startIndex : 0; i < this.length; i++) {
    if (this[i] === element) return i;
  }
  return -1;
};

// example
const array = [1, 2, 3];
const index1 = array.myIndexOf(1);
const index2 = array.myIndexOf(3, 1);
console.log(index1, index2);
