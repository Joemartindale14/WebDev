const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/User");

const JWT_SECRET = process.env.JWT_SECRET;

  // sign up route
  router.post('/signup', async (req, res) => {
    const { firstName, lastName, email, password, address, postcode } = req.body;
    try {
      const user = new User({ firstName, lastName, email, password, address, postcode });
      await user.save();
      res.status(201).send('User created');
    } catch (err) {
      res.status(400).send(err.message);
    }
  });
  
  // sign in route
  router.post('/signin', async (req, res) => {
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

  module.exports = router;