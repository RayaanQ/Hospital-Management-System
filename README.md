<div align="center">

# 🏥 HappyHealers — Hospital Website & Appointment Booking

**A responsive hospital website with an online appointment-booking form that saves bookings to MongoDB through an Express backend.**

![Node.js](https://img.shields.io/badge/Node.js-339933?logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?logo=mongodb&logoColor=white)
![Handlebars](https://img.shields.io/badge/Handlebars-f0772b?logo=handlebarsdotjs&logoColor=white)
![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white)

</div>

---

## ✦ Features

- **Hospital site:** home, services, about, doctors, booking and patient reviews, in a single responsive page.
- **Appointment booking:** patients submit their name, phone number, email, date and reason for the visit.
- **Persistence:** bookings are validated with a Mongoose schema (all fields required, one booking per email) and stored in MongoDB.
- **Server-rendered:** Express renders Handlebars (`hbs`) views and serves the static assets.

## ✦ Architecture

```mermaid
flowchart LR
    P[Patient] -->|booking form| E[Express app :3000<br/>hbs views]
    E -->|POST /| M[Mongoose model<br/>Booknow]
    M --> DB[(MongoDB Atlas<br/>HappyHealers)]
```

## ✦ Getting started

```bash
cd backend
npm install
npm run dev        # nodemon, http://localhost:3000
```

The app connects to the MongoDB database configured in `backend/src/db/conn.js` (project **HappyHealers**, database **test**, collection **booknows**). Point it at your own MongoDB connection string before running it.

## ✦ Project structure

```
backend/
├── src/
│   ├── app.js                 # Express server, routes, view engine
│   ├── db/conn.js             # MongoDB connection
│   └── models/booknow.js      # appointment schema
├── templates/views/           # index.hbs, booked.hbs
└── public/                    # CSS + client-side script
```

---

<div align="center"><sub>Built by <a href="https://github.com/RayaanQ">Rayaan Quraishi</a> · <a href="https://rayaanq.github.io/Portfolio/">Portfolio</a> · <a href="https://www.linkedin.com/in/rayaan-quraishi">LinkedIn</a></sub></div>
