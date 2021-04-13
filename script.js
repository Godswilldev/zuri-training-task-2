const fs = require("fs");

const url = "https://jsonplaceholder.typicode.com/posts";

const axios = require("axios");

axios
  .get(url)
  .then((response) => {
    const jsonData = JSON.stringify(response.data);
    fs.writeFile("result/posts.json", jsonData, (err) => {
      err ? console.log(err) : console.log("Wrote file successfully");
    });
  })
  .catch((error) => {
    console.log(error);
  });
