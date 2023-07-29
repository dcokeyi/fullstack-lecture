const bcrypt = require('bcrypt')

const databaseVariables = require('../../model/connection.js')

function postSignIn(req, res) {
    const { email, password } = req.body;

    if (email && password) {
        databaseVariables.query('SELECT * FROM users WHERE email = ?', [email], async (err, result) => {
            // if theres an error
            if (err) { throw err }
            // if the emailexists

            if (result.length === 0) {
                return res.status(401).json({ message: 'Invalid credential' });
            }

            if (result.length > 0) {
                const isPasswordValid = await bcrypt.compare(password, result[0].password)
                console.log(isPasswordValid)
                if (isPasswordValid) {
                    res.status(200).json({ message: "Valid User" })
                } else {
                    console.log("Invalid password")
                }
            }
        })
    }


    // if (rows.length === 0) {
    //     return res.status(401).json({ message: 'Invalid credential' });
    // }

    // // Compare the passwords
    // const user = rows[0];
    // const isPasswordValid = await bcrypt.compare(password, user.password)

    // if (!isPasswordValid) {
    //     return res.status(401).json({ message: 'Invalid credentials' })
    // }

    // res.status(200).json({ message: 'Signin successful' })

    // console.log(databaseVariables.query(sql, [email]))
}

module.exports = postSignIn;
