import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// import Snacks from "./pages/Snacks";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Layout from "./components/Layout";

function App() {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {/* <Route path="/Snacks" element={<Snacks />}></Route> */}
          {/* // <Route path="/movie/:id" element={<MovieDetails />}></Route> */}
          <Route path="/About" element={<About />}></Route>
          <Route path="/Cart" element={<Cart />}></Route>
        </Routes>
      </Layout>
    </>
  );
}

export default App;
