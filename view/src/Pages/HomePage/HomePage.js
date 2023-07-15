import React from "react";
import { Link } from "react-router-dom"
import './HomePage.css'

const HomePage = () => {
    return (
        <div className="container">
            <h1>Welcome To BUSY QA Academy</h1>
            <div className="links">
                <Link className="link" to="signin">Sign In</Link>
                <Link className="link" to="signup">Sign Up</Link>
            </div>
        </div>
    )
}

export default HomePage;