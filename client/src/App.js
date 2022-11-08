import Navbar from "./components/Navbar/Navbar";
import Posts from "./components/Posts/Posts";
import Home from "./pages/Home/Home";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Home/>
        <Posts/>
    </div>
  );
}

export default App;
