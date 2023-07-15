import { Routes, Route } from "react-router-dom"
import HomePage from './Pages/HomePage/HomePage'
import './App.css'
import SignUp from "./Pages/SignUpPage/SignUp";
import SignIn from "./Pages/SignInPage/SignIn"

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
    </Routes>
  );
}

export default App;
