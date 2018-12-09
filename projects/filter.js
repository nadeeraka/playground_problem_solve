//search for duplicates
// maxChar search for max string
// 'abccc'  => max c

//test 1
let str = "abcc";
let obj = {};

const maxChar = chr => {
  for (let obj of str) {
    console.log(obj[obj]);
  }
  //return obj;
};

let hold = maxChar(str);
console.log({
  ...hold
});
