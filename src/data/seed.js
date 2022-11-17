
const path = require('path'); //helps us find our file easily
const fs = require('fs').promises; //helps us get access to promises when dealing with seeding data into our database

const { db } = require('../db/db');
const { Video } = require('../models');

// console.log(path.join(__dirname, 'videos.json'))
const seed = async () => {

  await db.sync({ force: true }); // clear out database + tables

  const videoSeedPath = path.join(__dirname, 'videos.json'); //Mathew explains path resolves the journey to Video.file

  const buffer = await fs.readFile(videoSeedPath); //asynchronously reads the content in this file

  const { videosData } = JSON.parse(String(buffer)); // Convert data into a string then to an object. Tdl parse.

  const ShowPromises = videosData.map(video => Video.create(video)); //creates Video and puts video into the table

  await Promise.all(ShowPromises); // The Promise.all() method takes an iterable of promises as an input, and returns a single Promise that resolves to an array of the results of the input promises.

}


// export my seed function
module.exports = seed;
