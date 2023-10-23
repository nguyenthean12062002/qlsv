import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Header from "./Layout/Header/Header";
import Home from "./Router/Home/Home";
import Footer from "./Layout/Footer/Footer";
import ManagerStudents from "./Router/ManagerStudents/ManagerStudents";
import ManagerTution from "./Router/ManagerTution/ManagerTution";
import ManagerLearn from "./Router/ManagerLearn/ManagerLearn";
import Login from "./Router/Login/Login";
import Register from "./Router/Resgister/Resgister";
function App() {
  return (
    <Router>
      <div className="App d-flex align-items-center justify-content-between ">
        <header className="w-25">
          <Header />
        </header>
        <main className="w-75">
          <Container>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/managerstudents" element={<ManagerStudents />} />
              <Route path="/managertution" element={<ManagerTution />} />
              <Route path="/managerlearn" element={<ManagerLearn />} />
              <Route path="/account/login" element={<Login />} />
              <Route path="/account/register" element={<Register />} />
            </Routes>
          </Container>
        </main>

        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
