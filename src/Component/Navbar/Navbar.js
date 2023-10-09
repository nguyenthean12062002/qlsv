import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
function NavBars() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/">QLSV</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Trang Chủ</Nav.Link>
            <Nav.Link href="/about">Thông Tin</Nav.Link>
            <NavDropdown title="Tài Khoản" id="basic-nav-dropdown">
              <NavDropdown.Item href="/account/regeister">
                Đăng Ký
              </NavDropdown.Item>
              <NavDropdown.Item href="/account/login">
                Đăng Nhập
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBars;
