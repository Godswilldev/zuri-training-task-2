// Importing the file system module
const fs = require("fs");

//Importing the axios module.
const axios = require("axios");

//JSON placeholder URL
const url = "https://jsonplaceholder.typicode.com/posts";

//Using axios to fetch the posts from the URL
axios
  .get(url)
  .then((response) => {

//Converting the response gotten from the URL to a JSON string
    const jsonData = JSON.stringify(response.data);

//Writing the JSON data to a new file called in the results directory called "posts.json"
    fs.writeFile("result/posts.json", jsonData, (err) => {

// Error/ success message
      err ? console.log(err) : console.log("Wrote file successfully");
    });
  })
  .catch((error) => {
    console.log(error);
  });
