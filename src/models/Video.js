// const db = require('../db/db')
const { db, DataTypes, Model } = require('../db/db')

// const Video = db.define("videos", {
//   "thumbnail": DataTypes.STRING,
//   "duration": DataTypes.STRING,
//   "authorPicture": DataTypes.STRING,
//   "title": DataTypes.STRING,
//   "author": DataTypes.STRING,
//   "stats": DataTypes.STRING,
// });

class Video extends Model { }

Video.init({
  thumbnail: {
    type: DataTypes.STRING,
    allowNull: false
  },
  duration: {
    type: DataTypes.STRING,
    allowNull: false
  },
  authorPicture: {
    type: DataTypes.STRING,
    allowNull: false
  },
  title: {
    type: DataTypes.STRING,
    allowNull: false
  },
  author: {
    type: DataTypes.STRING,
    allowNull: false
  },
  stats: {
    type: DataTypes.STRING,
    allowNull: false
  },
}, { sequelize: db })

//exports
module.exports = { Video }