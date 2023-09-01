const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const { connectDB } = require("./database/connection.js");
const router = require('./router/route.js')

const app = express();

// middleware
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));
app.disable("x-powered-by"); // less hackers know about our stack

// Start server when we have only valid connection

const port = 4500;

app.use('/api',router);

connectDB()
  .then(() => {
    try {
      app.listen(port, () => {
        console.log(`Server connected to http://localhost:${port}`);
      });
    } catch (error) {
      console.log("Cannot connect to the server");
    }
  })
  .catch((error) => {
    console.log("Invalid database connection...!");
  });
