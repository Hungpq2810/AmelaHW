const express = require('express');
const todoController = require('../controllers/todoController');

const router = express.Router();

router.use('/todos', todoController);

module.exports = router;
