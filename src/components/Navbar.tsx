
import {  Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="uk-navbar-container" id="navbar">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/pricing">Pricing</Link>
        <Link to="/login">Log In</Link>
        <Link to="/signup">Sign Up</Link>
    </nav>
  )
}

export default Navbar