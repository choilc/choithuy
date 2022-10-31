import { SectionWrapper } from "../../_principles/styles";
import { Bank, Momo } from "../../assets/images";
import { QrWrapper, Text, ThanksText, Wrapper } from "./styles";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export function BankCode() {
  return (
    <SectionWrapper>
      <Wrapper>
        <Text> Gửi lời chúc đến chúng tớ</Text>
        <ThanksText>Cảm ơn!!!</ThanksText>
        <QrWrapper>
          <LazyLoadImage alt={"imgBank"} effect="blur" src={Bank} />
          <LazyLoadImage alt={"imgMomo"} effect="blur" src={Momo} />
        </QrWrapper>
      </Wrapper>
    </SectionWrapper>
  );
}
