const express = require('express'),
  router = express.Router();

const {
  getAllUsers,
  createUsers,
  getOneUser,
  deleteUsers,
} = require('../controllers/users.controller');

router.get('/', getAllUsers);
router.get('/:id', getOneUser);
router.post('/', createUsers);
router.delete('/:id', deleteUsers);

module.exports = router;
