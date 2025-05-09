import Header from "./component/Header";
import Banner from "./component/Banner";
import ReferenceVideo from "./component/ReferenceVideo";
import WhyViDuAi from "./component/WhyViDuAi";
import TeamplateForEveryone from "./component/TeamplateForEveryone";
import UseVidu from "./component/UseVidu";
import Comunity from "./component/Comunity";
import AboutVidu from "./component/AboutVidu";
import FrequentlyAsked from "./component/FrequentlyAsked";
import Footer from "./component/Footer";
function App() {
  return (
    <div className="mx-auto w-full bg-black">
      <Header />
      <Banner />
      <ReferenceVideo />
      <WhyViDuAi />
      <TeamplateForEveryone />
      <UseVidu />
      <Comunity />
      <AboutVidu />
      <FrequentlyAsked />
      <Footer />
    </div>
  );
}

export default App;
