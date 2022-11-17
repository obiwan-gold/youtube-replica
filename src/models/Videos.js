const { db, DataTypes } = require('../db/db')

// class Videos extends Model { }

// Videos.init({

// })
const Video = db.define("videos", {
  "thumbnail": DataTypes.STRING,
  "duration": DataTypes.STRING,
  "author-picture": DataTypes.STRING,
  "title": DataTypes.STRING,
  "author": DataTypes.STRING,
  "stats": DataTypes.STRING,
});

//exports
module.exports = { Video }