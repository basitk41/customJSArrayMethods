// custom method implementation.
Array.prototype.myIndexOf = function (e, i) {
  for (let j = i ?? 0; j < this.length; j++) if (this[j] === e) return j;
  return -1;
};

// example
const array = [1, 2, 3];
const index1 = array.myIndexOf(1);
const index2 = array.myIndexOf(3, 1);
console.log(index1, index2);
