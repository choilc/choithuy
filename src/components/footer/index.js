import styled from "styled-components";

function Footer() {
  const Footer = styled.footer`
    padding: 20px 0;
    text-align: center;
    font-size: 18px;
  `;
  return (
    <Footer className="bg-light">© 2022 Lo Choi All Rights Reserved.</Footer>
  );
}

export default Footer;
