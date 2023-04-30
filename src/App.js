import "./App.css";
import "./input.css";
import "../src/component/globle.css";
import Hero from "./component/Hero";
import ClockSection from "./component/ClockSection";
import Counter from "./component/Counter";
import ProsPactive from "./component/ProsPactive";
import AccordianImage from "./component/AccordianImage";
import TestToggle from "./component/TestToggle";
import PotentialReqt from "./component/PotentialReqt";
import IItDream from "./component/IItDream";
import NoWorry from "./component/NoWorry";
import Accordian from "./component/Accordian";
import Testimonial from "./component/Testimonial";
import MoreContent from "./component/MoreContent";
import ApplicationProcess from "./component/ApplicationProcess";
import Crausal from "./component/Crausal";
import ProgrameFee from "./component/ProgrameFee";
import Collabration from "./component/Collabration";
import Footer from "./component/Footer";
import AutoScroll from "./component/AutoScroll";
import LifeRaceMob from "./MobileComponent/LifeRaceMob";
import TextToggleMob from "./MobileComponent/TextToggleMob";
import IItDreamMob from "./MobileComponent/IItDreamMob";
import NoWorryMob from "./MobileComponent/NoWorryMob";

function App() {
  let width = window.innerWidth;
  console.log(width);
  return (
    <div className="bg-black">
      <Hero />
      {/* <LifeRaceMob />
      <TextToggleMob />
      <IItDreamMob />
      <NoWorryMob /> */}

      <ClockSection />
      <Counter />
      <AccordianImage />
      <TestToggle />
      <ProsPactive />
      <PotentialReqt />
      <AutoScroll />
      <IItDream />
      <NoWorry />
      <Accordian />
      <MoreContent />
      <Testimonial />
      <ApplicationProcess />
      <Crausal />
      <ProgrameFee />
      <Collabration />
      <Footer />
    </div>
  );
}

export default App;
