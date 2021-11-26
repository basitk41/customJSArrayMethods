// // custom method implementation.
// Array.prototype.mySplice = function (...args) {
//   let [index, del, ...elements] = args,
//     result = [],
//     arr = [],
//     test = [],
//     n = 0,
//     m = 0;
//   if (del >= this.length) del = this.length - 1;
//   if (del < 0) del = 0;
//   let length = this.length + elements.length - del;
//   for (let a = 0; a < this.length; a++) {
//     if (a >= index && a <= del && del !== 0) {
//       result[result.length] = this[a];
//     } else test[test.length] = this[a];
//   }
//   for (let i = 0; i < length; i++) {
//     if (i >= index && n < elements.length) {
//       arr[i] = elements[n];
//       n++;
//     } else {
//       arr[i] = test[m];
//       m++;
//     }
//     this[i] = arr[i];
//     this.length = length;
//   }
//   return result;
// };

// // example
// const arr = [1, 4, 5, 6, 7];
// console.log("return", arr.mySplice(1, 2));
// // console.log(arr.splice(1, 1, 4, 5));
// console.log("original arr", arr);

// Array.prototype.myIndexOf = function (element, startIndex) {
//   for (let i = startIndex ? startIndex : 0; i < this.length; i++) {
//     if (this[i] === element) return i;
//   }
//   return -1;
// };

// // example
// const array = [1, 2, 3];
// const index1 = array.myIndexOf(1);
// const index2 = array.myIndexOf(3, 1);
// console.log(index1, index2);

// // shift
// Array.prototype.myShift = function () {
//   const x = this[0],
//     len = this.length;
//   for (let i = 1; i < len; i++) {
//     this[i - 1] = this[i];
//   }
//   this.length = len - 1;
//   return x;
// };

// // example
// const array = [1, 2, 3];
// console.log(array.myShift());
// console.log(array);

// unshift
// Array.prototype.myUnshift = function (...args) {
//   const arr = [...args, ...this];
//   for (let i = 0; i < arr.length; i++) {
//     this[i] = arr[i];
//   }
//   return this.length;
// };

// // example
// const array = [1, 2, 3];
// console.log(array.myUnshift(1, 2));
// // console.log(array.unshift(1, 2));
// console.log(array);
