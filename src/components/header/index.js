import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../_principles/colors";

function Header() {
  const Wrapper = styled.div`
    .navbar-brand {
      font-size: 32px;
    }
    a {
      font-size: 24px;
      font-weight: bold;
    }
  `;
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Wrapper className="container">
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
              to="/images"
              style={{ color: colors.main }}
            >
              Ảnh
            </Link>
            {/* <Link
              className="nav-link"
              to="/google_sheet"
              style={{ color: colors.main }}
            >
              Danh sách tham gia
            </Link>
            <a
              className="nav-link"
              href="https://www.google.com/maps/place/22%C2%B019'39.6%22N+103%C2%B033'04.2%22E/@22.3276679,103.5506185,259m/data=!3m2!1e3!4b1!4m23!1m16!4m15!1m6!1m2!1s0x3135abb462da2943:0x832d1c2b3e67d432!2zROKAmU9mZmljZSwgROG7i2NoIFbhu41uZywgQ-G6p3UgR2nhuqV5LCBIw6AgTuG7mWk!2m2!1d105.7951837!2d21.0286667!1m6!1m2!1s0x36cd58ae71934bc9:0xfa27b63275bb8a42!2zQuG6o24gSG9uLCBUYW0gxJDGsOG7nW5nLCBMYWkgQ2jDonUsIFZp4buHdCBOYW0!2m2!1d103.5523313!2d22.32542!3e0!3m5!1s0x0:0xf27208c3e48e266b!7e2!8m2!3d22.3276738!4d103.55116?hl=vi"
              style={{ color: colors.main }}
              target="_blank"
              rel="noreferrer"
            >
              Bản đồ
            </a>
            <Link
              className="nav-link"
              to="/bank_code"
              style={{ color: colors.main }}
            >
              Chúc mừng chúng tớ
            </Link> */}
          </Nav>
        </Navbar.Collapse>
      </Wrapper>
    </Navbar>
  );
}

export default Header;
