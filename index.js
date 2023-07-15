const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const app = express();

app.use(cors());

app.use(bodyParser.json())

app.get("/", (req, res) => {
    res.send("Hello World")
})

app.post('/signin', (req, res) => {
    console.log(req.body)
    const { email, password } = req.body

    if (email === 'abc@busyqa.com' && password === 'cool') {
        res.send("valid user")
    }

    res.send("invalid user")
})

const PORT = 3001;
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`)
})