const express = require("express");
const path = require("path");
const app = express();
const hbs = require("hbs");

require('dotenv').config();
require("./db/conn");
const Booknow = require("./models/booknow");

const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const static2_path = path.join(__dirname, "script");

const template_path = path.join(__dirname, "../templates/views");

app.use(express.json());
app.use(express.urlencoded({extended:false}));

app.use(express.static(static_path));
app.use(express.static(static2_path));
app.set("view engine", "hbs");
app.set("views",template_path);


app.get("/", (req, res) => {
    res.render("index");
});

// app.get("/booked", (req, res) => {
//     res.render("booked");
// });

//creating a new user in our db
app.post("/", async (req, res) => {
    console.log(req.body);
    try {
        const bookingdetails = new Booknow({
            name: req.body.name,
            number: req.body.number,
            email: req.body.email,
            date: req.body.date,
            reason: req.body.reason
        })

    const booked = await bookingdetails.save();
    res.status(201).render("index");
    } catch (error) {
        res.status(400).send(error);
    }
});

app.listen(port, () => {
    console.log(`server is running at port no ${port}`);
})