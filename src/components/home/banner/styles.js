import styled from "styled-components";

export const Wrapper = styled.div`
  height: calc(100vh - 56px);
`;

export const Background = styled.div`
  width: 100%;
  height: 100%;
  background-image: url(${({ bg }) => bg});
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  color: #000;
  padding-bottom: 100px;
`;

export const BannerText = styled.div``;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 40px;
  font-size: 46px;
`;

export const Description = styled.div`
  display: flex;
`;

export const Address = styled.div`
  padding-right: 20px;
  font-size: 20px;
`;

export const Name = styled.div`
  position: relative;
  text-align: center;
  padding: 0 20px;
  font-size: 30px;
  &::before {
    content: "";
    display: block;
    width: 2px;
    height: 150px;
    background-color: #fff;
    position: absolute;
    top: 0;
    left: -1px;
  }
  &::after {
    content: "";
    display: block;
    width: 2px;
    height: 150px;
    background-color: #fff;
    position: absolute;
    top: 0;
    right: -1px;
  }
`;

export const Date = styled.div`
  padding-left: 20px;
  font-size: 20px;
`;
