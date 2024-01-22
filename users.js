// Es importante llamar a la carpeta de donde se van a utilizar los datos:

const user = require("./data");

// getters, utilizan las clases para tener sus atributos
// De igual manera se pueden utilizar las clases para poder llamar a objetos, pero en esta ocasión será por medio de getters

function getUserById(id) {
  return users.find((user) => user.id === id);
}

function getUserById(username) {
  return users.find((user) => user.name === username);
}

function validatePassword(userId, password) {
  const user = getUserById(id);
  return user ? user.password === password : false;
}

// exportarlos en una sola linea:
module.exports = { getUserById, getUserByUsername, validatePassword };
