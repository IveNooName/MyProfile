import './App.css';
import Navbar from "./components/Navbar/Navbar.tsx";
import {Outlet} from "react-router";
import Footer from "./components/Footer/Footer.tsx";

function App() {

    return (
        <>
            <div className="header">
                <Navbar></Navbar>
            </div>
            <div className="container">
                <div className="router">
                    <Outlet></Outlet>
                </div>
                <div className="footer">
                    <Footer></Footer>
                </div>
            </div>
        </>
    );
}

export default App;
