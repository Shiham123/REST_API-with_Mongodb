const { v4: uuidv4 } = require('uuid');
// const { response, request } = require('../app');

const usersModal = require('../models/users.modal');

const getAllUsers = async (request, response) => {
  try {
    const users = await usersModal.find();
    response.status(200).json(users);
  } catch (error) {
    response.status(500).send(error.message);
  }
};

const getOneUser = async (request, response) => {
  try {
    const oneUser = await usersModal.findOne({ id: request.params.id });
    response.status(201).json(oneUser);
  } catch (error) {
    response.status(500).send(error.message);
  }
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

const updateUsers = (request, response) => {};

const deleteUsers = async (request, response) => {
  try {
    await usersModal.deleteOne({ id: request.params.id });
    response.status(205).json({ message: 'user is deleted' });
  } catch (error) {
    response.status(500).send(error.message);
  }
};

module.exports = {
  getAllUsers,
  getOneUser,
  createUsers,
  updateUsers,
  deleteUsers,
};
