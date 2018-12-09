//3= fiz
//5=buz
//3&5 fizbuz
const logic = n => {
  for (let i = 1; i < n; i++) {
    if (i % 5 === 0 && i % 3 === 0) {
      console.log("fizBuzz");
    } else if (i % 3 === 0) {
      console.log("fiz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
};
logic(16);
