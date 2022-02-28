const colors = require("./color");
const chosenColor = colors.getRandomColor();
console.log(`Use ${chosenColor.name} on your website`);
module.exports = chosenColor;
