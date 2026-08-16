import './App.css'
import Navbar from "./components/Navbar/Navbar.tsx";
import LandingPage from "./components/LandingPage/LandingPage.tsx";

function App() {

  return (
    <>
        <Navbar />
        <div className="container">
            <LandingPage />
        </div>
    </>
  )
}

export default App
