// with yhis line 'this' will have an attribute we
// module.exports.we = "we";
console.log(this);
function add(a, b) {
  // an empty object because its called with call and apply
  console.log(this);
  return a + b;
}
console.log(
  // true
  add.call(this, 1, 2) === 3,
  "we are callig add with the module object and passing it two arguments"
);
console.log(
  // true
  add.apply(this, [1, 2]) === 3,
  "we are callig add with the module object and passing it two arguments"
);
