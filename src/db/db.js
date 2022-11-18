// imports
const path = require('path');
const { Model, Sequelize, DataTypes } = require('sequelize')

//create an instance of the database call it db
const db = new Sequelize({
  dialect: 'sqlite',
  storage: path.join(__dirname, 'youtube.sqlite'),
  logging: false
})



//export
module.exports = { db, DataTypes, Model };