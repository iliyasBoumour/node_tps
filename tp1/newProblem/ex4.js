function User(first, last) {
  this.name = first + " " + last;
}
var user = User("John", "Doe");
console.log(typeof user == "undefined");
// global object has an attribute name
console.log(global);
// equivalent to console.log(name);
