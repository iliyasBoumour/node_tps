// set a name and hange it
function Person(name) {
  this.name = name;
  this.changeName = function (newName) {
    this.name = newName;
  };
}
var merlin = new Person("merlin");
console.log(merlin.name == "merlin", "The name has been set on initialization");
merlin.changeName("Bob");
console.log(merlin.name == "Bob", "The name was successfully changed.");
