const express = require("express");
var cors = require('cors');
const db = require("./db.json");
const app = express();




// Define a route to handle GET requests


app.get("/projectsdetail", (req, res) => {
  res.json(db.projectsdetail);
});

app.get("/developer", (req, res) => {
  res.json(db.developer);
});
// Start the Express server
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
