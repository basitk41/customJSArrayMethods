// custom method implementation.
Array.prototype.mySplice = function (...args) {
  let [index, del, ...elements] = args,
    removed = [],
    remaining = [],
    converted = [],
    m = 0,
    n = 0;
  if (del >= this.length) del = this.length - 1;
  if (this.length === 0) (del = 0), (index = 0);
  if (del < 0) del = 0;
  let length = this.length + elements.length - del;
  for (let i = 0; i < this.length; i++) {
    if (i >= index && i <= del && del !== 0 && del !== removed.length)
      removed[removed.length] = this[i];
    else remaining[remaining.length] = this[i];
  }
  for (let j = 0; j < length; j++) {
    if (j >= index && n < elements.length) (converted[j] = elements[n]), n++;
    else (converted[j] = remaining[m]), m++;
    this[j] = converted[j];
  }
  this.length = length;
  return removed;
};

// example
const arr = [1, 4];
console.time("Time Complexity: ");
console.log("return", arr.mySplice(1, 0, 2));
// console.log(arr.splice(1, 0, 2));
console.timeEnd("Time Complexity: ");
console.log("original arr", arr);
