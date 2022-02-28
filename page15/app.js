"use strict";
const utils = require("./index");
const dir = process.argv[2];
const filterStr = process.argv[3];

const callback = (err, res) => {
  if (err) {
    console.log("an error occured");
  } else {
    console.log(res);
  }
};
utils(dir, filterStr, callback);
