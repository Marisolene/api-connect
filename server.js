let users = [
  {
    id: 1,
    name: "Mariana",
    email: "mariana@email.com"
  },
  {
    id: 2,
    name: "Higor",
    email: "higor@email.com"
  }
];

let nextId = 3;

function getNextId() {
  return nextId++;
}

module.exports = {
  users,
  getNextId
};
