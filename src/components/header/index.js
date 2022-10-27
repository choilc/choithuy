import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { colors } from "../../_principles/colors";

function Header() {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Link className="navbar-brand" to="/">
          CT
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/" style={{ color: colors.main }}>
              Trang chủ
            </Link>
            <Link
              className="nav-link"
              to="/link"
              style={{ color: colors.main }}
            >
              Ảnh
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
