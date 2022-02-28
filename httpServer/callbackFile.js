const path = require("path");
const fs = require("fs");
const fsProm = require("fs").promises;
const colors = require("../colors/index");

const readFile = async (res, filePath) => {
  try {
    return await fsProm.readFile(filePath, "utf-8");
  } catch (error) {
    res.statusCode = 404;
    console.log(error);
  }
};
const readHtml = async () => {
  try {
    return await fsProm.readFile("index.html", "utf-8");
  } catch (error) {
    res.statusCode = 404;
    console.log(error);
  }
};
const callback = async (req, res) => {
  switch (req.url) {
    case "/test.txt":
      res.end(await readFile(res, "test.txt"));
      break;
    case "/color":
      res.end(`<h1>${colors.name}</h1>`);
      break;

    default:
      const data = await readHtml();
      res.end(data);
      break;
  }
};
module.exports = callback;
