import React from "react";
import {
  Address,
  Background,
  BannerText,
  Date,
  Description,
  Name,
  Title,
  Wrapper,
} from "./styles";
import { Bg, BannerBg } from "../../../assets/images";

export function Banner() {
  return (
    <Wrapper>
      <Background bg={BannerBg}>
        <BannerText>
          <Title>Đừng quên nhé!</Title>
          <Description>
            <Address>Lai Châu</Address>
            <Name>
              Lò Chọi
              <br />
              ♡
              <br />
              Tẩn Thuỷ
            </Name>
            <Date>13.11.2022</Date>
          </Description>
        </BannerText>
      </Background>
    </Wrapper>
  );
}
