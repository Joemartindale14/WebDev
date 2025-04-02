const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../models/User");

const JWT_SECRET = process.env.JWT_SECRET;

// middleware to authenticate token
const authenticateToken = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Access denied" });

  jwt.verify(token, JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.user = user;
    next();
  });
};

// middleware to check if user is admin
const isAdmin = (req, res, next) => {
  if (!req.user.isAdmin) return res.status(403).json({ message: "Access denied" });
  next();
};

// sign up route
router.post('/signup', async (req, res) => {
  const { firstName, lastName, email, password, address, postcode, isAdmin } = req.body;
  try {
    const user = new User({ firstName, lastName, email, password, address, postcode, isAdmin });
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
    if (!user) return res.status(400).json({ message: "Invalid email or password" });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ message: "Invalid email or password" });

    const token = jwt.sign({ userId: user._id, isAdmin: user.isAdmin }, JWT_SECRET, { expiresIn: '1h' });
    res.json({ token, isAdmin: user.isAdmin });
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// create admin route
router.post('/create-admin', async (req, res) => {
  const { firstName, lastName, email, password, address, postcode } = req.body;
  try {
    const user = new User({ firstName, lastName, email, password, address, postcode, isAdmin: true });
    await user.save();
    res.status(201).send('Admin user created');
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// account route
router.get('/account', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.userId);
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// update user details
router.put('/account', authenticateToken, async (req, res) => {
  try {
    const user = await User.findByIdAndUpdate(req.user.userId, req.body, { new: true });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

// admin routes for updating merchandise and classes
router.put('/merchandise', authenticateToken, isAdmin, async (req, res) => {
  res.send('Merchandise updated');
});

router.put('/classes', authenticateToken, isAdmin, async (req, res) => {
  res.send('Classes updated');
});

module.exports = router;