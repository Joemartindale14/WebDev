const express = require("express");
const router = express.Router();
const jwt = require('jsonwebtoken');
const Order = require("../models/Order");

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

router.post("/", authenticateToken, async (req, res) => {
    const { items, totalPrice } = req.body;
  
    try {
      const order = new Order({
        userId: req.user.userId,
        items,
        totalPrice,
        status: "Pending",
      });
  
      await order.save();
      res.status(201).json(order);
    } catch (error) {
      console.error("Error creating order:", error);
      res.status(500).json({ message: "Failed to create order", error: error.message });
    }
  });

module.exports = router;