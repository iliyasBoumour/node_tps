function merge(root) {
  // [Arguments] { '0': { name: 'John' }, '1': { city: 'Boston' } }
  console.log(arguments.length);
  //   root is the first arg passed to merge
  console.log(root);
  //   {city:"Boston"}
  console.log(arguments[1]);
  for (var i = 1; i < arguments.length; i++)
    for (var key in arguments[i]) {
      root[key] = arguments[i][key];
    }
  return root;
}
var merged = merge({ name: "John" }, { city: "Boston" });
console.log(merged.name);
console.log(merged.city);
console.log(merged);
