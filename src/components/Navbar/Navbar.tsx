import "./Navbar.css";
import {Button} from "@/components/ui/button.tsx";

function Navbar() {
    return (
        <div className="navbar">
            <a>
                <Button variant="ghost" className={"main"}>
                    <img src={"src/assets/vite.svg"} alt="" className={"logo"} />
                    <span>Jonas Berger</span>
                </Button>
            </a>
            <a>
                <Button variant="ghost">About me</Button>
            </a>
            <a>
                <Button variant="ghost">Projects</Button>
            </a>
        </div>
    );
}

export default Navbar;
