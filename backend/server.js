const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require('./routes/authRoutes');
const classRoutes = require('./routes/classRoutes');

//express app
const app = express(); // create Express app
const PORT = process.env.PORT || 5000; // set port
const MONGO_URI = process.env.MONGO_URI; // set MongoDB URI

app.use(bodyParser.json());

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }) 
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

  // allow requests from your front-end (localhost:5173)
  app.use(cors({
    origin: 'http://localhost:5173',  // allow your front-end domain
  }));

  // use auth routes
  app.use('/api/auth', authRoutes);

  //use class routes
  app.use('/api', classRoutes);

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
