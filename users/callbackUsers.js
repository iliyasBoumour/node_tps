const request = require("request");
const fs = require("fs");
request(
  "https://jsonplaceholder.typicode.com/users",
  (error, response, body) => {
    if (error) {
      console.error(`Could not send request to API: ${error.message}`);
      return;
    }
    if (response.statusCode != 200) {
      console.error(
        `Expected status code 200 but received ${response.statusCode}.`
      );
      return;
    }
    console.log("Processing our list of users");
    // users = JSON.parse(body);
    fs.writeFile("callbackUsers.csv", body, (err, res) => {
      if (err) {
        console.log(err);
        process.exit(-1);
      }
      console.log("created");
    });

    // users.forEach((user) => {
    //   console.log(`${user["name"]}, ${user["email"]}`);
    // });
  }
);
