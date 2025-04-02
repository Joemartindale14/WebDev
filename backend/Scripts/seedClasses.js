const mongoose = require("mongoose");
const Class = require("../models/Class");

const MONGO_URI = "mongodb+srv://JoeMartindale:Resetmypassword1@cluster0.inhx4.mongodb.net/WEB?retryWrites=true&w=majority&appName=Cluster0";

const sampleClasses = [
  {
    name: "Yoga for Beginners",
    time: "08:00",
    instructor: "Instructor A",
    bookings: 5
  },
  {
    name: "Advanced Pilates",
    time: "10:00",
    instructor: "Instructor B",
    bookings: 3
  },
  {
    name: "HIIT Training",
    time: "12:00",
    instructor: "Instructor C",
    bookings: 8
  },
  {
    name: "Zumba Dance",
    time: "14:00",
    instructor: "Instructor A",
    bookings: 2
  },
  {
    name: "Strength Training",
    time: "16:00",
    instructor: "Instructor B",
    bookings: 6
  },
  {
    name: "Cardio Blast",
    time: "18:00",
    instructor: "Instructor C",
    bookings: 4
  }
];

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(async () => {
    console.log("Connected to MongoDB");
    await Class.insertMany(sampleClasses);
    console.log("Sample classes inserted");
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error("Error connecting to MongoDB:", err);
  });