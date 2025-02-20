const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/User");

const JWT_SECRET = process.env.JWT_SECRET;

  // Middleware to authenticate token
  const authenticateToken = (req, res, next) => {
    const token = req.headers["authorization"]?.split(" ")[1];
    if (!token) return res.status(401).send("Access denied");

    jwt.verify(token, JWT_SECRET, (err, user) => {
      if (err) return res.status(403).send("Invalid token");
      req.user = user;
      next();
    });
  };

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

  // account route
  router.get('/account', authenticateToken, async (req, res) => {
    try {
      const user = await User.findById(req.user.userId).select("-password");
      res.send(user);
    } catch (err) {
      res.status(400).send(err.message);
    }
  });

  // update user details
  router.put('/account', authenticateToken, async (req, res) => {
    try {
      const userId = req.user.userId;
      const updatedData = req.body;

      const user = await User.findByIdAndUpdate(userId, updatedData, { new: true });
      if (!user) {
        return res.status(404).json({ message: 'User not found' });
      }

      res.json(user);
    } catch (error) {
      console.error('Error updating user data', error);
      res.status(500).json({ message: 'Server error' });
    }
  });

  module.exports = router;