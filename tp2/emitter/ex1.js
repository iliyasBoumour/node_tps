const EventEmitter = require("events").EventEmitter;
const fs = require("fs");
const fsProm = require("fs").promises;
class Counter extends EventEmitter {
  iter() {
    for (let i = 1; i <= 3; i++) {
      setTimeout(function () {
        console.log(i);
      }, 0);
    }
  }
  increment(init) {
    init++;
    //Implement: fire the event called “Incremented”
    this.emit("incremented", init);
  }
} // end of class definition
class FileIO {
  sum = async (arr) => {
    let t = 0;
    for (let i = 0; i < arr.length; i++) {
      const { size } = await fsProm.stat(arr[i]);
      t += size;
    }
    return t;
  };
  async getFiles(mydir) {
    const filenames = await fsProm.readdir(mydir);
    console.log("Number of Directory Entries:", filenames.length);
    const t = await this.sum(filenames);
    return t;
  }

  getTheFiles(mydir) {
    //Implement
    return fsProm.readdir(mydir);
  }
}
module.exports = { Counter, FileIO };
