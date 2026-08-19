import './App.css';
import Navbar from "./components/Navbar/Navbar.tsx";
import LandingPage from "./components/LandingPage/LandingPage.tsx";
import {Route, Routes} from "react-router";
import ContactPage from "./components/ContactPage/ContactPage.tsx";

function App() {

    return (
        <>
            <div className="header">
                <Navbar></Navbar>
            </div>
            <div className="container">
                <Routes>
                    <Route path="/" element={
                        <LandingPage></LandingPage>
                    }>
                    </Route>
                    <Route path="/contact" element={
                        <ContactPage></ContactPage>
                    }>
                    </Route>
                </Routes>
            </div>
        </>
    );
}

export default App;
