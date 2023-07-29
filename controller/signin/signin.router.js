const express = require("express")

const signInController = require("./signin.controller");

const signInRouter = express.Router();

signInRouter.post('/', signInController);

module.exports = signInRouter;