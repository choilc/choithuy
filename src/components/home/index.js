import { MainWrapper } from "../../_principles/styles.js";
import { Banner } from "./banner/index.js";
import { Schedule } from "./schedule/index.js";
import { WeddingDay } from "./wedding_day/index.js";
import { Whisper } from "./whisper/index.js";

function Home() {
  return (
    <MainWrapper>
      <Banner />
      <Whisper />
      <WeddingDay />
      <Schedule />
    </MainWrapper>
  );
}

export default Home;
