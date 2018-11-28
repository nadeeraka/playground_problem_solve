// reverse given string

let word = "somthing";

// const rev = word => {
//   let wArray = word.split("", word.length).reverse();
//   return wArray;
// };

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

// using reduse

let prev = word => {
  let hold = word.split("", word.length);

  let s = hold.reduce((a, c) => {
    a = c + a;
    return a;
  });
  console.log(s);
};
console.log(prev(word));
