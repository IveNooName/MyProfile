import "./Navbar.css";
import {Link} from "react-router";

function Navbar() {
    return (
        <nav className="my-navbar">
            <Link to="/" className="nav-link">
                <button className={"main"}>
                    <img src={"src/assets/vite.svg"} alt="" className={"logo"}/>
                    <span>Jonas Berger</span>
                </button>
            </Link>
            <Link to="about">
                <button>About me</button>
            </Link>
            <Link to="/projects">
                <button>Projects</button>
            </Link>
            <Link to="/contact">
                <button>Contact</button>
            </Link>
        </nav>
    );
}

export default Navbar;
