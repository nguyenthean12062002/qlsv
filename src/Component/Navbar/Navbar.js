import { useState, useEffect, useContext } from "react";
import { toast, ToastContainer } from "react-toastify";
import Container from "react-bootstrap/Container";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";
import { UserContext } from "../../Context/UseContext";
import { useNavigate } from "react-router-dom";
function NavBars() {
  const { user, login, logout } = useContext(UserContext);
  const navigate = useNavigate();
  // get data from local storage then check is Name Login

  useEffect(() => {
    if (localStorage.getItem("name")) {
      login(localStorage.getItem("name"));
    }
  }, []);

  const handleLogOut = (e) => {
    logout(user.name);
    navigate("/");
    e.preventDefault();
    toast.success("Đăng xuất thành công");
  };
  return (
    <Navbar expand="lg" className="bg-body-tertiary ">
      <Container>
        <Navbar.Brand href="/">QLSV</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Trang Chủ</Nav.Link>
            {/* hide managerStudents */}
            {localStorage.getItem("name") && (
              <>
                <Nav.Link href="/managerstudents">Quản lí sinh viên</Nav.Link>
                <Nav.Link href="/managertution">Quản lí học phí</Nav.Link>
              </>
            )}
            <NavDropdown
              href="/"
              className="text-capitalize"
              title={user.name ? `${user.name}` : "Tài khoản"}
              id="basic-nav-dropdown"
            >
              {user && user.name ? (
                <>
                  <NavDropdown.Item
                    href="/"
                    onClick={handleLogOut}
                    className="w-1"
                  >
                    Đăng Xuất
                  </NavDropdown.Item>
                </>
              ) : (
                <>
                  <NavDropdown.Item href="/account/register">
                    Đăng Ký
                  </NavDropdown.Item>
                  <NavDropdown.Item href="/account/login">
                    Đăng Nhập
                  </NavDropdown.Item>
                </>
              )}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBars;
