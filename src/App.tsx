import './App.css'
import Navbar from "./components/Navbar/Navbar.tsx";
import LandingPage from "./components/LandingPage/LandingPage.tsx";

function App() {

  return (
    <>
        <div className="header">
            <Navbar></Navbar>
        </div>
        <div className="container">
            <LandingPage></LandingPage>
        </div>
    </>
  )
}

export default App
