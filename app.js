
const express = require("express");
var cors = require('cors');
const db = require("./db.json");
const app = express();
var fs = require('fs'); //require file system object



// Define a route to handle GET requests
app.use(cors());

app.get('/projectsdetail/:id', (req, res) => {
  const projectId = req.params.id; // Extract the 'id' parameter from the URL
  const projectDetail = db.projectsdetail[projectId - 1 ]; // Assuming 'db.projectsdetail' is an array or object containing project details

  if (projectDetail) {
    res.json(projectDetail); // Send the project detail as JSON response
  } else {
    res.status(404).json({ error: 'Project not found' }); // Send a 404 error if project is not found
  }
});


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
