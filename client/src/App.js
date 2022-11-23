import Navbar from "./components/Navbar/Navbar";
import Posts from "./components/Posts/Posts";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Sell from "./pages/Sell/Sell";
import Single from "./pages/Single/Single";

function App() {
  return (
    <div className="App">
        <Navbar/>
        {/* <Home/>
        <Posts/> */}
        {/* <Single/> */}
        {/* <Sell/> */}
        {/* <Login/> */}
        <Register/>
    </div>
  );
}

export default App;
