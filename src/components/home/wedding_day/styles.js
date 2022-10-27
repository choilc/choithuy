import styled from "styled-components";

export const Background = styled.div`
  width: 100%;
  height: 720px;
  background-image: url(${({ bg }) => bg});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0 -160px;
  opacity: 0.5;
`;

export const BannerText = styled.div`
  position: absolute;
  top: 60px;
  left: 50%;
  transform: translate(-50%, 0);
  color: #910a0a;
  font-weight: bold;
`;

export const Title = styled.h1`
  text-align: center;
  margin-bottom: 30px;
  font-size: 46px;
`;

export const Date = styled.h2`
  text-align: center;
  font-size: 46px;
  margin-bottom: 30px;
`;

export const Thanks = styled.p`
  text-align: center;
  font-size: 30px;
  margin-bottom: 200px;
`;

export const CountdownWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const SubText = styled.div`
  font-size: 28px;
`;

export const CountdownText = styled.div`
  display: flex;
  gap: 30px;
`;

export const ValueWrapper = styled.div`
  text-align: center;
`;

export const Value = styled.div`
  font-size: 50px;
  width: 80px;
`;

export const Text = styled.div`
  font-size: 20px;
`;
