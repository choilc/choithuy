import { SectionWrapper } from "../../../_principles/styles";
import { Image, QrWrapper, Text, ThanksText, Wrapper } from "./styles";
import { Bank } from "../../../assets/images/index";

export function QrCode() {
  return (
    <SectionWrapper>
      <Wrapper>
        <Text> Gửi lời chúc đến chúng tớ để duy trì domain nhé :))</Text>
        <ThanksText>Cảm ơn!!!</ThanksText>
        <QrWrapper>
          <Image src={Bank} alt="bank" />
        </QrWrapper>
      </Wrapper>
    </SectionWrapper>
  );
}
