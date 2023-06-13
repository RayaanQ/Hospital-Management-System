const mongoose = require("mongoose");
const url = "mongodb://127.0.0.1:27017/booknow";

mongoose.connect(url).then(() => {
    console.log(`connection successful`);
}).catch((e) => {
    console.log(`no connection`);
})