var katana = {
  isSharp: true,
  use: function () {
    // is the object that call use ({ isSharp: true, use: [Function: use] }) (inside a method)
    console.log(this);
    this.isSharp = !this.isSharp;
  },
};
katana.use();
// the value has been changed
console.log(katana.isSharp);
