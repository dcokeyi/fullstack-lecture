import React, { useState } from "react";
import axios from "axios";
import "./SignUp.css"

const SignUp = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3001/signup", { name, email, password })
            .then(res => console.log(res))
            .catch(err => console.log(err))
    }


    return (
        <div className="form">
            <h1> Sign Up </h1>
            <form className="" onSubmit={handleSubmit}>
                <label>Name</label>
                <input
                    type="text"
                    value={name}
                    onChange={(event) => setName(event.target.value)}
                    required={true}
                />
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
                <button className="button" type="Submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp;