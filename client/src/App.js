import Navbar from "./components/Navbar/Navbar";
import Posts from "./components/Posts/Posts";
import Home from "./pages/Home/Home";
import Single from "./pages/Single/Single";

function App() {
  return (
    <div className="App">
        <Navbar/>
        {/* <Home/>
        <Posts/> */}
        <Single/>
    </div>
  );
}

export default App;
