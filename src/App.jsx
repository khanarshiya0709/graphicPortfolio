import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Videos from "./pages/Videos";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Work />
      <Contact />
    </>
  );
}

function App() {
  return (
    <>
      {/* <Navbar /> */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/videos" element={<Videos />} />
      </Routes>
    </>
  );
}

export default App;
