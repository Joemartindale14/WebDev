const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require('./routes/authRoutes');
const classRoutes = require('./routes/classRoutes');


//express app
const app = express(); //create express app
const PORT = process.env.PORT || 5000; //set port
const MONGO_URI = process.env.MONGO_URI; //set MongoDB URI

app.use(bodyParser.json());

//allow requests from front-end
const corsOptions = {
  origin: "*",
  methods: ["POST", "GET", "OPTIONS", "PUT", "DELETE"],
  credentials: false,
  allowedHeaders: ["Content-Type", "Authorization", "X-Requested-With"]
};
 
app.use(cors(corsOptions));
 
app.options('*', cors(corsOptions));
 
app.use(express.json());
 

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }) 
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

//use auth routes
app.use('/api/auth', authRoutes);

//use class routes
app.use('/api', classRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});