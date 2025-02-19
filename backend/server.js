const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const User = require("./models/User");
const Class = require("./models/Class");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

//express app
const app = express(); // Create Express app
const PORT = process.env.PORT || 5000; // Set port
const MONGO_URI = process.env.MONGO_URI; // Set MongoDB URI
const JWT_SECRET = process.env.JWT_SECRET; // Set JWT secret

app.use(bodyParser.json());

mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }) 
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.log(err));

  // sign up route
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
  
  // sign in route
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

  // get all classes route
app.get('/api/classes', async (req, res) => {
    try {
      const classes = await Class.find();
      res.send(classes);
    } catch (err) {
      res.status(400).send(err.message);
    }
  });

  // book class route
  app.post('/api/book', async (req, res) => {
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

// Cancel a booking
app.post('/api/cancel', async (req, res) => {
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

  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });
