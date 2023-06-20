// const mongoose = require("mongoose");
// const url = "mongodb://127.0.0.1:27017/booknow";
const mongoose = require("mongoose");

const uri = "mongodb+srv://RayaanQ:bNJdG6anTUDfB0kX@cluster0.iwrkyfz.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri).then(() => {
    console.log(`connection successful`);
}).catch((e) => {
    console.log(`no connection`);
})
