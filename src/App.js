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
function App() {
  return (
    <div className="bg-black">
      <Hero />
      <ClockSection />
      <Counter />
      <AccordianImage />
      <TestToggle />
      <ProsPactive />
      <PotentialReqt />
    </div>
  );
}

export default App;
