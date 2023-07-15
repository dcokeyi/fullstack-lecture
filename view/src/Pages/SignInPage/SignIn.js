import React, { useState } from "react";
import axios from "axios"


const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/signin", { email, password })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    required={true}
                />
                <label>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    required={true}
                />
                <button type="Submit">Sign In</button>
            </form>
        </div>
    )
}

export default SignIn;