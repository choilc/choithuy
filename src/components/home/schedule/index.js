import { SectionWrapper } from "../../../_principles/styles";
import {
  EventEmpty,
  EventLeft,
  EventRight,
  EventText,
  EventTime,
  EventWrapper,
  IconWrapper,
  Invitation,
  ScheduleWrapper,
  SubTitle,
  Title,
  Wrapper,
} from "./styles";
import { FaGlassCheers } from "react-icons/fa";
import { GiLovers, GiForkKnifeSpoon, GiMusicalNotes } from "react-icons/gi";

export function Schedule() {
  return (
    <SectionWrapper>
      <Wrapper className="container">
        <Title>Chương trình tiệc cưới</Title>
        <Invitation>Mời bạn</Invitation>
        <SubTitle>
          Tới dự bữa cơm thân mật mừng hôn lễ của chúng tớ tại đồng ruộng bản Nà
          Khum - Bản Hon - Tam Đường - Lai Châu nhé!
        </SubTitle>
        <ScheduleWrapper>
          <EventWrapper>
            <EventLeft>
              <EventTime>10:00</EventTime>
              <EventText>Đón khách</EventText>
            </EventLeft>
            <IconWrapper>
              <FaGlassCheers />
            </IconWrapper>
            <EventEmpty></EventEmpty>
          </EventWrapper>
          <EventWrapper>
            <EventEmpty></EventEmpty>
            <IconWrapper>
              <GiLovers />
            </IconWrapper>
            <EventRight>
              <EventTime>11:00</EventTime>
              <EventText>Lễ thành hôn</EventText>
            </EventRight>
          </EventWrapper>
          <EventWrapper>
            <EventLeft>
              <EventTime>11:30</EventTime>
              <EventText>Ăn tiệc</EventText>
            </EventLeft>
            <IconWrapper>
              <GiForkKnifeSpoon />
            </IconWrapper>
            <EventEmpty></EventEmpty>
          </EventWrapper>
          <EventWrapper>
            <EventEmpty></EventEmpty>
            <IconWrapper>
              <GiMusicalNotes />
            </IconWrapper>
            <EventRight>
              <EventTime>12:30</EventTime>
              <EventText>Quẩy</EventText>
            </EventRight>
          </EventWrapper>
        </ScheduleWrapper>
      </Wrapper>
    </SectionWrapper>
  );
}
