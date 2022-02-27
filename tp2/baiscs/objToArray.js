function make(obj) {
  //   return Array().slice.call(obj);
  return [].slice.call(obj);
  //   return new Array().slice.call(obj);
}
var obj = {
  0: "we",
  1: "are",
  2: "the champions",
  length: 3,
};
console.log(make(obj));
