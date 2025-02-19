const mongoose = require("mongoose");

const classSchema = new mongoose.Schema({
    name: { type:String, required: true },
    time: { type:String, required: true },
    bookings: { type:Number, default: 0 },
});

const Class = mongoose.model("Class", classSchema);

module.exports = Class;