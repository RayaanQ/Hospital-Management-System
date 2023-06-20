const mongoose = require("mongoose");
// const url = "mongodb://127.0.0.1:27017/booknow";

// mongoose.connect(url).then(() => {
//     console.log(`connection successful`);
// }).catch((e) => {
//     console.log(`no connection`);
// })
mongoose.set('strictQuery',false);

const connectDB = async()=> {
    try
    {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`Connection successfull on : ${conn.connection.host}`);
    }
    catch(error)
    {
        console.log(error);
        process.exit(1);
    }
}