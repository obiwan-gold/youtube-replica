const { Router } = require("express");
const { Video } = require("../models/index");
const videoRouter = Router();

videoRouter.get('/', async (req, res) => {
  const videos = await Video.findAll();
  res.send(videos);
})

module.exports = videoRouter