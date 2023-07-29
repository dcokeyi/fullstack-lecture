const express = require("express")

const signUpController = require("./signup.controller");

const signUpRouter = express.Router();

signUpRouter.post('/', signUpController);

module.exports = signUpRouter;