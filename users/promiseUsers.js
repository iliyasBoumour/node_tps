const axios = require("axios");
const fs = require("fs").promises;

const getData = async (url) => {
  try {
    const { data } = await axios.get(url);
    await fs.writeFile("promiseUsers.csv", JSON.stringify(data));
    console.log("created");
  } catch (error) {
    console.log(error);
  }
};

getData("https://jsonplaceholder.typicode.com/users");
