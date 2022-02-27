const EventEmitter = require("events").EventEmitter;
function Counter() {
  this.iter = function () {
    var fireCount = 0;
    var start = new Date();
    var tick = function () {
      if (new Date() - start > 1000) {
        console.log(fireCount);
        return;
      }
      fireCount++;
      process.nextTick(tick);
    };
    process.nextTick(tick);
  };
  this.increment = function (init) {
    init++;
    this.emit("incremented", init);
  };
}
const counter = new Counter();
counter.iter();
const callback = function (count) {
  console.log("increment count", count);
};
const eventEmitter = new EventEmitter();
eventEmitter.on("incremented", callback);
counter.increment.call(eventEmitter, 5);
