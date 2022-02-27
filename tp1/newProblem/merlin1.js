function Merlin() {
  this.name = "Merlin";
}
console.log(Merlin());
var merlinA = Merlin();
console.log(!merlinA, "Is undefined, not an instance of Merlin.");
// we created an object of type merlin that has a property name
var merlinB = new Merlin();
// Merlin { name: 'Merlin' }
console.log(merlinB);
console.log(
  merlinB.name == "Merlin",
  "Property exists on the merlin instance."
);
