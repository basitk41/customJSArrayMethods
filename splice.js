// custom method implementation.
Array.prototype.mySplice = function (...args) {
  let [index, del, ...elements] = args,
    result = [],
    arr = [],
    test = [],
    n = 0,
    m = 0;
  if (del >= this.length) del = this.length - 1;
  if (this.length === 0) (del = 0), (index = 0);
  if (del < 0) del = 0;
  let length = this.length + elements.length - del;
  for (let a = 0; a < this.length; a++) {
    if (a >= index && a <= del && del !== 0 && del !== result.length)
      result[result.length] = this[a];
    else test[test.length] = this[a];
  }
  for (let i = 0; i < length; i++) {
    if (i >= index && n < elements.length) (arr[i] = elements[n]), n++;
    else (arr[i] = test[m]), m++;
    this[i] = arr[i];
  }
  this.length = length;
  return result;
};

// example
const arr = [1, 4];
console.log("return", arr.mySplice(0, 0, 2));
// console.log(arr.splice(1, 3, 4, 5));
console.log("original arr", arr);
