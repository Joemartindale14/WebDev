const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const User = require("./models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//express app
const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI;
const JWT_SECRET = process.env.JWT_SECRET;

app.use(bodyParser.json());

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

  app.post('/signup', async (req, res) => {
    const { firstName, lastName, email, password, address, postcode } = req.body;
    try {
      const user = new User({ firstName, lastName, email, password, address, postcode });
      await user.save();
      res.status(201).send('User created');
    } catch (err) {
      res.status(400).send(err.message);
    }
  });
  
  app.post('/signin', async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      if (!user) return res.status(400).send('Invalid email or password');
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) return res.status(400).send('Invalid email or password');
      const token = jwt.sign({ userId: user._id }, JWT_SECRET);
      res.send({ token });
    } catch (err) {
      res.status(400).send(err.message);
    }
  });
  
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
