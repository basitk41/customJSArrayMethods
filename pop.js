// custom method implementation.
Array.prototype.myPop = function () {
  let x = this[this.length - 1];
  this.length = this.length - 1;
  return x;
};

// example
const array = [1, 2, 3];
console.log(array.myPop());
console.log(array);
