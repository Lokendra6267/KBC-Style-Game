// Importing the required modules
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');

// Define a port to listen on
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Load the question from Json file
const questions = JSON.parse(fs.readFileSync('./questions.json'));


app.get('/api/question',(req,res)=>{
    const questionIndex = Math.floor(Math.random() * questions.length);
    res.json(questions[questionIndex]);
});

// Start the server
app.listen(port, () => {
  console.log(`Backend is running on http://localhost:${port}`);
});
