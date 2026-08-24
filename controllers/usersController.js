const { users, getNextId } = require("../data/users");

function validateUser(req, res) {
  const { name, email } = req.body;

  if (!name || !email) {
    res.status(400).json({
      error: "Os campos nome e e-mail são obrigatórios."
    });

    return false;
  }

  return true;
}

function listUsers(req, res) {
  res.status(200).json({
    data: users
  });
}

function createUser(req, res) {
  if (!validateUser(req, res)) {
    return;
  }

  const { name, email } = req.body;

  const newUser = {
    id: getNextId(),
    name,
    email
  };

  users.push(newUser);

  res.status(201).json({
    data: newUser
  });
}

function getUserById(req, res) {
  const id = Number(req.params.id);

  const user = users.find(user => user.id === id);

  if (!user) {
    return res.status(404).json({
      error: "Usuário não encontrado."
    });
  }

  res.status(200).json({
    data: user
  });
}

function updateUser(req, res) {
  if (!validateUser(req, res)) {
    return;
  }

  const id = Number(req.params.id);

  const index = users.findIndex(user => user.id === id);

  if (index === -1) {
    return res.status(404).json({
      error: "Usuário não encontrado."
    });
  }

  const { name, email } = req.body;

  users[index] = {
    id,
    name,
    email
  };

  res.status(200).json({
    data: users[index]
  });
}

function deleteUser(req, res) {
  const id = Number(req.params.id);

  const index = users.findIndex(user => user.id === id);

  if (index === -1) {
    return res.status(404).json({
      error: "Usuário não encontrado."
    });
  }

  users.splice(index, 1);

  res.status(204).send();
}

module.exports = {
  listUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser
};
