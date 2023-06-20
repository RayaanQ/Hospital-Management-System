const mongoose = require("mongoose");

const bookingschema = new mongoose.Schema({
    name: {
        type:String,
        required:true
    },
    number: {
        type:Number,
        required:true
    },
    email: {
        type:String,
        required:true,
        unique:true
    },
    date: {
        type:String,
        required:true
    },
    reason: {
        type:String,
        required:true
    }
})


const Booknow = new mongoose.model("Booknow",bookingschema)

module.exports = Booknow;