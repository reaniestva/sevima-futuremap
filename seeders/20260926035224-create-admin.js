'use strict';
const bcrypt = require("bcrypt")

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface) {
    const hashedPassword = await bcrypt.hash("admin123", 10)

    await queryInterface.bulkInsert("Users", [
      {
        name: "Futuremap admin",
        email: "admin@futuremap.com",
        password: hashedPassword,
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  },

  async down (queryInterface) {
    await queryInterface.bulkDelete("Users", {
      email: "admin@futuremap.com",
    })
  }
};
