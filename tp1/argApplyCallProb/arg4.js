function highest() {
  return makeArray(arguments).sort(function (a, b) {
    return b - a;
  });
}
function makeArray(args) {
  console.log("args", args);
  console.log(Array().slice.call(args));
  //return Array().slice.call(args);
  //return Array.prototype.slice.call(args);
  return [].slice.call(args);
}
console.log(highest(1, 1, 2, 3)[0] == 3, "Get the highest value.");
console.log(highest(3, 1, 2, 3, 4, 5)[1] == 4, "Verify the results.");
