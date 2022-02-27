var object = {};
function fn() {
  console.log(this);
  // this is the global object by default
  return this;
}
// this is an empty object (module in node is empty)
console.log(this);
// false
console.log(fn() == this, "global object vs module object");
// true
// fn.call() chages the this inside the fn function
console.log(fn.call(object) == object);
