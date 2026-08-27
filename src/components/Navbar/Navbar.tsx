import "./Navbar.css";
import {Link} from "react-router";
import logoImage from "../../assets/vite.svg"

function Navbar() {
    return (
        <nav className="my-navbar">
            <Link to="/" className="nav-link">
                <button className={"main"}>
                    <img src={logoImage} alt="" className={"logo"}/>
                    <span>Jonas Berger</span>
                </button>
            </Link>
            <Link to="/about-me">
                <button>About me</button>
            </Link>
            <Link to="/projects">
                <button>Projects</button>
            </Link>
            <Link to="/i-steal-your-credit-card">
                <button>???</button>
            </Link>
            <Link to="/contact">
                <button>Contact</button>
            </Link>
        </nav>
    );
}

export default Navbar;
