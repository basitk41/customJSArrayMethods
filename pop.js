// custom method implementation.
Array.prototype.myPop = function () {
  let x = this[this.length - 1];
  this.length = this.length > 0 ? this.length - 1 : 0;
  return x;
};

// example
const array = [1, 2];
console.log(array.myPop());
// console.log(array.pop());
console.log(array);
