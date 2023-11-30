import Partners from "./components/Partners";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Video from "./components/video";
import Roadmap from "./components/Roadmap";
import HowToUse from "./components/HowToUse";
import JoinNow from "./components/JoinNow";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <div className="h-navbar-height"></div>
      <div className="">
        <Hero />
      </div>

      <div className=" my-6">
        <Partners />
      </div>

      <div className="py-6 mt-20">
        <Video />
      </div>
      <div className="py-6 ">
      <Roadmap />
      </div>

      <div className="py-6 ">
      <HowToUse/>
      </div>

      <div className="py-6 ">
        <JoinNow/>
      </div>
      <div className=" pt-6 pb-3">
        <Footer/>

      </div>
    </>
  );
}

export default App;
