const Sequelize = require('sequelize')
const sequelize = new Sequelize('booking_appointment', 'root', 'user', { dialect: 'mysql', host: 'localhost' })
module.exports = sequelize