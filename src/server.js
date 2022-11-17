// Connection
const express = require("express");
const app = express();
// Database
const db = require("./db/db")
const seed = require('./data/seed')
// Required Port
const PORT = 3000;

app.use(express.json());

// Routes to implement Postman
app.use('/shows', showRouter)

// Deploy web server
app.listen(PORT, async () => {
  await seed()
})

module.exports = { app, db };