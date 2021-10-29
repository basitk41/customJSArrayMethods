// custom method implementation.
Array.prototype.myForEach = function (callback) {
  for (let i = 0; i < this.length; i++) {
    callback(this[i], i, this);
  }
};

// example
const array = [1, 2, 3];
array.myForEach((x) => console.log(x));
