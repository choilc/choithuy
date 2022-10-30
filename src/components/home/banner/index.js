import React from "react";
import {
  Address,
  Background,
  BannerText,
  Date,
  Description,
  Name,
  Title,
} from "./styles";
import { BannerBg } from "../../../assets/images";
import { SectionWrapper } from "../../../_principles/styles";

export function Banner() {
  return (
    <SectionWrapper>
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
    </SectionWrapper>
  );
}
