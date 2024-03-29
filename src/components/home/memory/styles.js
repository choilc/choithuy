import styled from "styled-components";
import { colors } from "../../../_principles/colors";

export const RingBg = styled.div`
  background-image: url(${({ bg }) => bg});
  background-position: 0 -52%;
  background-size: cover;
  height: 200px;
`;

export const Wrapper = styled.div`
  background-color: ${colors.white};
  padding: 60px 0;
`;

export const Heading = styled.h3`
  text-align: center;
  font-size: 46px;
  margin-bottom: 40px;
`;

export const Description = styled.p`
  font-size: 24px;
  margin-bottom: 40px;

  @media only screen and (max-width: 992px) {
    padding: 0 8px;
  }
`;

export const ImageWrapper = styled.div`
  display: grid;
  grid-template-columns: 25% 25% 25% 25%;
  gap: 10px;
  margin-bottom: 40px;

  #ReactSimpleImageViewer {
    z-index: 1021;
  }

  @media only screen and (max-width: 992px) {
    grid-template-columns: calc(50% - 5px) calc(50% - 5px);
  }
`;

export const ImageItem = styled.div`
  background-color: #f7f7f7;
  height: 400px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  border: 1px solid #ccc;
  transition: all 0.5s ease-in-out;
  cursor: pointer;
  @media only screen and (max-width: 992px) {
    height: 320px;
  }

  img {
    width: 100%;
    height: auto;
  }
  &:hover {
    transform: scale(1.1);
    @media only screen and (max-width: 992px) {
      transform: scale(1);
    }
  }
`;

export const ButtonShowMore = styled.div`
  display: flex;
  justify-content: center;
  button {
    padding: 0;
  }

  a {
    width: 100%;
    height: 100%;
    font-size: 20px;
  }
`;
