import Navbar from "./components/Navbar/Navbar";
import Posts from "./components/Posts/Posts";
import Home from "./pages/Home/Home";
import Sell from "./pages/Sell/Sell";
import Single from "./pages/Single/Single";

function App() {
  return (
    <div className="App">
        <Navbar/>
        {/* <Home/>
        <Posts/> */}
        {/* <Single/> */}
        <Sell/>
    </div>
  );
}

export default App;
