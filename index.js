const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

const signInRouter = require('./controller/signin/signin.router')
const signUpRouter = require('./controller/signup/signup.router')
const databaseVariables = require('./model/connection')

app.use(cors());
app.use(bodyParser.json())

databaseVariables.connect(function (err) {
    if (err) {
        throw err
    }

    console.log("Database connected");
});

app.use('/signin', signInRouter)

app.use('/signup', signUpRouter)

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})