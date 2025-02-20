const express = require('express');
const router = express.Router();
const Class = require('../models/Class');

  // get all classes
  router.get('/classes', async (req, res) => {
    try {
      const classes = await Class.find();
      res.send(classes);
    } catch (err) {
      res.status(400).send(err.message);
    }
  });

// book a class
router.post('/book', async (req, res) => {
  const { classId } = req.body;
  try {
    const classItem = await Class.findById(classId);
    if (classItem) {
      classItem.bookings += 1;
      await classItem.save();
      res.json({ success: true });
    } else {
      res.status(404).json({ success: false, message: 'Class not found' });
    }
  } catch (err) {
    res.status(400).send(err.message);
  }
});

// cancel a booking
router.post('/cancel', async (req, res) => {
  const { classId } = req.body;
  try {
    const classItem = await Class.findById(classId);
    if (classItem && classItem.bookings > 0) {
      classItem.bookings -= 1;
      await classItem.save();
      res.json({ success: true });
    } else {
      res.status(404).json({ success: false, message: 'Class not found or no bookings to cancel' });
    }
  } catch (err) {
    res.status(500).send(err.message);
  }
});

module.exports = router;