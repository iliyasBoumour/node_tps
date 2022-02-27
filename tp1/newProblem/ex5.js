// function User(firstn, lastn) {
//   this.lname = firstn + " " + lastn;
// }
// global.lname = "Doe"; //navigator: window.lname = "Doe";
// var user = User("John", lname); // Il est où l’opérateur new ?
// // true
// console.log(
//   lname == "John Doe",
//   "The name variable is accidentally overridden."
// );

// assurez-vous de l’appel à l’opérateur new

function User(firstn, lastn) {
  if (this === global) {
    return { fname: firstn + " " + lastn };
  }
}
var fname = "Doe";
var user = User("John", fname);
console.log(user);
console.log(fname == "Doe");
