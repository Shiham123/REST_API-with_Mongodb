const express = require('express'),
  router = express.Router();

const { getAllUsers, createUsers } = require('../controllers/users.controller');

router.get('/', getAllUsers);
router.post('/', createUsers);

module.exports = router;
