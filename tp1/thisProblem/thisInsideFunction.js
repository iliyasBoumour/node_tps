function katana() {
  // this inside a function is the global object
  console.log(this);
  this.isSharp = true;
  console.log(this);
}
katana();
console.log(isSharp === true, "global object");
