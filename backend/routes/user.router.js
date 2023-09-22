const express = require('express');
const { profile } = require('../controllers/user.controller');
const { isAuthenticated } = require('../middleware/auth.middleware');
const userRouter = express.Router();

userRouter.route('/profile').get(isAuthenticated, profile);

module.exports = userRouter;