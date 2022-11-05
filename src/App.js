import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Layout />}>
            <Route index element={<Home />} />
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
