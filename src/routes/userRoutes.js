const express = require('express');
const router = express.Router();

const userController = require('../controllers/userController');

router.post('/create', userController.createUser);
router.get('/list', userController.listUsers);
router.get('/:id', userController.getUserById);
router.put('/update/:id', userController.updateUser);
router.delete('/:id', userController.deleteUser);

module.exports = router;