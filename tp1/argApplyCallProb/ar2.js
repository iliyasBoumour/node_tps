function smallest1(array) {
  return Math.min.apply(Math, array);
}
function largest1(array) {
  return Math.max.apply(Math, array);
}
function smallest2(array) {
  return Math.min(...array);
}
function largest2(array) {
  return Math.max(array[0], array[1], array[2], array[3]);
}
console.log(smallest1([0, 1, 2, 3]) == 0, "Locate the smallest value.");
console.log(largest1([0, 1, 2, 3]) == 3, "Locate the largest value.");
console.log(smallest2([0, 1, 2, 3]) == 0, "Locate the smallest value.");
console.log(largest2([0, 1, 2, 3]) == 3, "Locate the largest value.");
