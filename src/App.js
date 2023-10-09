import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Header from "./Layout/Header/Header";
import Home from "./Router/Home/Home";
import Footer from "./Layout/Footer/Footer";
import About from "./Router/About/About";
import Login from "./Router/Login/Login";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/account/login" element={<Login />} />
            <Route path="/account/register" element={<Login />} />
          </Routes>
        </Container>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
