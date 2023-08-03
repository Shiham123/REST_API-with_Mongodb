const { v4: uuidv4 } = require('uuid');
// const { response, request } = require('../app');

const usersModal = require('../models/users.modal');

const getAllUsers = (request, response) => {
  response.status(200).json({ message: 'all users' });
};

const getOneUser = (request, response) => {
  response.status(201).json({ message: 'get one users' });
};

const createUsers = async (request, response) => {
  try {
    const newUser = new usersModal({
      id: uuidv4(),
      name: request.body.name,
      aga: Number(request.body.age),
    });
    await newUser.save();
    response.status(202).json(newUser);
  } catch (error) {
    response.status(500).send(error.message);
  }
};

const updateUsers = (request, response) => {
  response.status(203).json({ message: 'update the all users' });
};

const deleteUsers = (request, response) => {
  response.status(204).json({ message: 'delete users' });
};

module.exports = {
  getAllUsers,
  getOneUser,
  createUsers,
  updateUsers,
  deleteUsers,
};
