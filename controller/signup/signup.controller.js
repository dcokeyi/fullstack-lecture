const bcrypt = require('bcrypt')

const databaseVariables = require('../../model/connection.js')

async function postSignUp(req, res) {
    const { name, email, password } = req.body;
    if (!name && !email && !password) {
        return console.log("input is invalid")
    }

    const sql = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';

    //Hash password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    databaseVariables.query(sql, [name, email, hashedPassword], (err, result) => {
        if (err) {
            console.log("Error creating user")
            return res.status(500).json({ error: "Error creating user" })
        }

        //user successfull created
        return res.status(201).json({ message: "User created succcessfully" });
    })
}

module.exports = postSignUp;
