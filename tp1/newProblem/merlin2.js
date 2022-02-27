// is like a class with attributes
function Lancelot() {
  this.swung = false;
  // Should return true
  this.swingSword = function () {
    this.swung = !this.swung;
    return this.swung;
  };
}
//instaciate an object of type Lncelot
var lancelotA = new Lancelot();
console.log(lancelotA.swingSword(), "Calling the instance method.");
console.log(lancelotA.swung, "The lancelot has swung the sword.");
var lancelotB = new Lancelot();
console.log(
  !lancelotB.swung,
  "Make sure that the lancelot has not swung his sword."
);
