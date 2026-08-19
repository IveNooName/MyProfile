import "./Navbar.css";

function Navbar() {
    return (
        <nav className="my-navbar">
            <a>
                <button className={"main"}>
                    <img src={"src/assets/vite.svg"} alt="" className={"logo"}/>
                    <span>Jonas Berger</span>
                </button>
            </a>
            <a>
                <button>About me</button>
            </a>
            <a>
                <button>Projects</button>
            </a>
        </nav>
    );
}

export default Navbar;
