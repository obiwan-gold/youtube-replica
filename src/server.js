// Connection
const express = require("express");
const app = express();
// Database
const db = require("../src/db/db")
const seed = require('../src/data/seed')
// Required Port
const PORT = 3003;
const videoRouter = require("./routes/video-route")


app.use(express.json());
// // Routes to implement Postman
app.use('/videos', videoRouter)
app.use('/static', express.static("public"))

// Deploy web server
app.listen(PORT, async () => {
  await seed()
  console.log(`http://localhost:${PORT}`)
})

module.exports = { app, db };