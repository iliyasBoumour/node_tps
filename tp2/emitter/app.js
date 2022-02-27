const { Counter, FileIO } = require("./ex1");
// const counter = new Counter();
// // counter.iter();
// const callback = function (count) {
//   console.log("increment count", count);
// };
// counter.on("incremented", callback);
// counter.increment(5);

const fileIo = new FileIO();
fileIo
  .getFiles(".")
  .then((res) => console.log("total", res))
  .catch((err) => console.log(err));

const readAsy = async () => {
  try {
    const data = await fileIo.getTheFiles(".");
    console.log("data", data);
  } catch (error) {
    console.log(error);
  }
};
// readAsy();
// fileIo.getTheFiles(".").then((res) => console.log("as:", res));
