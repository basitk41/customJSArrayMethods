// custom method implementation.
Array.prototype.myJoin = function (x) {
  let result = "";
  for (let i = 0; i < this.length; i++) {
    result += `${i > 0 ? x : ""}${this[i]}`;
  }
  return result;
};

// example
const array = [1, 2, 3];
const str = array.myJoin("");
console.log(str);
