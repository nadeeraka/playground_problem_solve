// reverse given string

//let word = "somthing";

// const rev = word => {
//   let wArray = word.split("", word.length).reverse();
//   return wArray;
// };

//-----------------------------------------------------
//refactor

// const rev = word =>
//   word
//     .split("", word.length)
//     .reverse()
//     .join("");

// console.log(rev(word));

// const longApproch = word => {
//   let hold = word.split("", word.length);
//   for (let index = hold.length; index > 0; index--) {
//     const element = hold[index];
//     console.log(element);
//   }
// };

// const longApproch = word => {
//   let hold = word;
//   let h = "";
//   for (const i of hold) {
//     h = i + h;
//   }
//   return h;
// };
// console.log(longApproch(word));

//---------------------------------------------------
// using reduse

// let prev = word => {
//   let hold = word.split("", word.length);
//   debugger;
//   let s = hold.reduce((a, c) => {
//     a = c + a;
//     return a;
//   });
//   console.log(s);
// };
// console.log(prev(word));

//----------------------------------------------------
//if use nagative number is not going to work
//this work only positive integer
// without using toString()
// let worad = 51;
// let hold = " ";

// let reverse = w => {
//   w === NaN ? w : (w += "");
//   for (const i of w) {
//     hold = i + hold;
//   }
//   let value = Number(hold);
//   return value;
// };
// let v = reverse(worad) === NaN ? " worng" : "correct";
// console.log(v);

// using .toString | math.sign |   parseInt
let worad = -51;
let hold = " ";

let reverse = w => {
  let value = w;
  if (Math.sign(value) === 1) {
    value === NaN ? value : (value += "");
    for (const i of value) {
      hold = i + hold;
    }
  } else {
    let arr = value + "";
    let shift = arr.split("");
    // let remove = shift.shift();
    let reverse = shift.reverse().join("");
    let int = parseInt(reverse);
    return (neg = int * -1);
  }
};
// let v = reverse(worad) === NaN ? " worng" : "correct";
// console.log(v);
console.log(reverse(worad));
