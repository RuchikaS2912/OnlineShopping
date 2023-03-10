const bcrypt = require("bcryptjs");

const users = [
  {
    firstName: "admin",
    lastName: "admin",
    email: "admin@admin.com",
    password: bcrypt.hashSync("admin@admin.com", 10),
    isAdmin: true,
  },
  {
    firstName: "John",
    lastName: "Doe",
    email: "john@doe.com",
    password: bcrypt.hashSync("john@doe.com", 10),
    isAdmin: false,
  },
];

module.exports = users;
