const { Router } = require("express");
const { Video } = require("../models/index");
const { Op } = require("sequelize");
const videoRouter = Router();

videoRouter.get('/', async (req, res) => {
  const videos = await Video.findAll();
  res.send(videos);
})

// Importing db
videoRouter.post('/search', async (req, res) => {
  const { title } = req.body
  const video = await Video.findAll({
    where: {
      title: {
        [Op.substring]: title
      }
    }
  });
  res.send(video);
})


module.exports = videoRouter