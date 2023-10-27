import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Header from "./Layout/Header/Header";
import Home from "./Pages/Home/Home";
import Footer from "./Layout/Footer/Footer";
import ManagerStudents from "./Pages/ManagerStudents/ManagerStudents";
import ManagerTution from "./Pages/ManagerTution/ManagerTution";
import ManagerLearn from "./Pages/ManagerLearn/ManagerLearn";
import { ManagerTeacher } from "./Pages/ManagerTeacher/ManagerTeacher";
import ManagerPermission from "./Pages/ManagerPermission/ManagerPermission";
import ManagerDepartment from "./Pages/ManagerDepartment/ManagerDepartment";
import Login from "./Pages/Login/Login";
import Register from "./Pages/Resgister/Resgister";
import Top from "./Layout/Top/Top";
function App() {
  return (
    <>
      <Router>
        <div className="App d-flex align-items-center justify-content-between ">
          <header className="w-25">
            <Header />
          </header>
          <main className="w-100">
            <Top />
            <Container>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/manager/students" element={<ManagerStudents />} />
                <Route path="/manager/tution" element={<ManagerTution />} />
                <Route path="/manager/learn" element={<ManagerLearn />} />
                <Route path="/account/login" element={<Login />} />
                <Route path="/account/register" element={<Register />} />
                <Route path="/manager/teacher" element={<ManagerTeacher />} />
                <Route
                  path="/manager/permisson"
                  element={<ManagerPermission />}
                />

                <Route
                  path="/manager/department"
                  element={<ManagerDepartment />}
                />
              </Routes>
            </Container>
          </main>
        </div>
      </Router>
    </>
  );
}

export default App;
