import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";
import Headphone from "./components/Headphone";
import Speaker from "./components/speakers/Speaker";
import Earphones from "./components/earphones/Earphones";
import Headphone1 from "./components/headphone1/Headphone1";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="headphone" element={<Headphone />} />
            <Route path="speaker" element={<Speaker />} />
            <Route path="earphone" element={<Earphones />} />
            <Route path="headphone/headphone1" element={<Headphone1 />} />
          </Route>
        </Routes>
      </BrowserRouter>

      {/* <Navbar />
      <Header />
      <Footer />
      <About />
      <Footer />
      <Portfolio />
      <Footer />
      <Resume />
      <Footer /> */}
    </div>
  );
}

export default App;
