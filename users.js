const express = require('express');
const { createUser, getUser } = require('../controllers/userController');
const { validateUser } = require('../middlewares/validation');
const router = express.Router();

router.post('/', validateUser, createUser);
router.get('/:id', getUser);

module.exports = router;
