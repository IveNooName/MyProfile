import './App.css';
import Navbar from "./components/Navbar/Navbar.tsx";
import {Outlet} from "react-router";

function App() {

    return (
        <>
            <div className="header">
                <Navbar></Navbar>
            </div>
            <div className="container">
                <Outlet></Outlet>
            </div>
        </>
    );
}

export default App;
