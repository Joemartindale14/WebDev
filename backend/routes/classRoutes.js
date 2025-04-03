const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');
const Class = require('../models/Class');
const User = require('../models/User');

//middleware to authenticate token
const authenticateToken = (req, res, next) => {
  const token = req.headers["authorization"]?.split(" ")[1];
  if (!token) return res.status(401).json({ message: "Access denied" });

  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ message: "Invalid token" });
    req.user = user;
    next();
  });
};

//get all classes
router.get('/classes', async (req, res) => {
  try {
    const classes = await Class.find();
    res.send(classes);
  } catch (err) {
    res.status(400).send(err.message);
  }
});

//book a class
router.post('/book', authenticateToken, async (req, res) => {
  const { classId } = req.body;
  const userId = req.user.userId;

  try {
    const classItem = await Class.findById(classId);
    const user = await User.findById(userId);

    if (classItem && user) {
      classItem.bookings += 1;
      await classItem.save();

      if (!user.bookedClasses) user.bookedClasses = [];
      user.bookedClasses.push(classId);
      await user.save();

      res.json({ success: true, message: `Successfully booked ${classItem.name}` });
    } else {
      res.status(404).json({ success: false, message: 'Class or user not found' });
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});

//cancel a booking
router.post('/cancel', authenticateToken, async (req, res) => {
  const { classId } = req.body;
  const userId = req.user.userId;

  try {
    const classItem = await Class.findById(classId);
    const user = await User.findById(userId);

    if (classItem && user) {
      classItem.bookings -= 1;
      await classItem.save();

      user.bookedClasses = user.bookedClasses.filter(id => id.toString() !== classId);
      await user.save();

      res.json({ success: true, message: `Cancelled booking for ${classItem.name}` });
    } else {
      res.status(404).json({ success: false, message: 'Class or user not found' });
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;