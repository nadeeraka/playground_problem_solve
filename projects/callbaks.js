//callbacks

let produse = (x, y, z) => {
  if (z == "add") {
    return x + y;
  } else if (z == "multy") {
    return x * y;
  }
};
console.log(produse(1, 2, "add"));
