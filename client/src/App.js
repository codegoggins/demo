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
    <BrowserRouter>
    <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="login" element={<Login/>} />
          <Route path="register" element={<Register/>} />
          <Route path="single" element={<Single/>} />
            <Route path="items">
              <Route index element={<Items/>} />
              <Route path=":itemId" element={<Single/>} />
              <Route path="sell" element={<Sell/>} />
            </Route>
        </Route>
      </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
