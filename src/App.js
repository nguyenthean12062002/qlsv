import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Header from "./Layout/Header/Header";
import Home from "./Router/Home/Home";
import Footer from "./Layout/Footer/Footer";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Container>
          <Routes>
            <Route to="/" element={<Home />} />
          </Routes>
        </Container>
        {/* <Footer /> */}
      </div>
      ;
    </Router>
  );
}

export default App;
