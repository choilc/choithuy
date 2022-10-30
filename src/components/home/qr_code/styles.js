import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: #e9e9e9;
  padding: 60px 0;
`;

export const Text = styled.div`
  text-align: center;
  font-size: 24px;
  @media only screen and (max-width: 992px) {
    font-size: 20px;
  }
`;

export const ThanksText = styled.div`
  text-align: center;
  font-size: 32px;
  margin-bottom: 40px;
`;

export const QrWrapper = styled.div`
  width: 400px;
  margin: 0 auto;
  @media only screen and (max-width: 992px) {
    width: 100%;
  }
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  border-radius: 12px;
`;
