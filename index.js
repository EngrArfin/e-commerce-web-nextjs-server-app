require("dotenv").config();
const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB connection URL
const uri = process.env.DATABASE_URL;

const client = new MongoClient(uri, {
  serverApi: ServerApiVersion.v1,
});

// Run the server
run().catch(console.dir);

// Home route
app.get("/", (req, res) => {
  res.send("Welcome to the Mechanical Keyboard Project!");
});

// Start the server
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
