import Navbar from "./components/Navbar/Navbar";
import Items from "./components/Items/Items";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Sell from "./pages/Sell/Sell";
import Single from "./pages/Single/Single";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import '../src/globalStyles.css'

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Footer/>
    </div>
  );
}

export default App;
