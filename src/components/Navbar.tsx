
import {  Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="uk-navbar-container" id="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/pricing">Pricing</Link>
        <a href="#">Log In</a>
        <a href="#">Sign Up</a>
        
    </nav>
  )
}

export default Navbar