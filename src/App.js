import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Header from "./Layout/Header/Header";
import Home from "./Router/Home/Home";
import Footer from "./Layout/Footer/Footer";
import ManagerStudents from "./Router/ManagerStudents/ManagerStudents";
import ManagerTution from "./Router/ManagerTution/ManagerTution";
import Login from "./Router/Login/Login";
import Register from "./Router/Resgister/Resgister";
function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Container>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/managerstudents" element={<ManagerStudents />} />
            <Route path="/managertution" element={<ManagerTution />} />
            <Route path="/account/login" element={<Login />} />
            <Route path="/account/register" element={<Register />} />
          </Routes>
        </Container>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
