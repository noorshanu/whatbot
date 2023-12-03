import React, { useEffect } from "react";
import Partners from "./components/Partners";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Roadmap from "./components/Roadmap";
import HowToUse from "./components/HowToUse";
import JoinNow from "./components/JoinNow";
import Footer from "./components/Footer";
import SectionVideo from "./components/SectionVideo";
import Tokonomics from "./components/Tokonomics";
import CounterSection from "./components/CounterSection";

const StarField = () => {
  const wH = window.innerHeight;
  const wW = window.innerWidth;

  useEffect(() => {
    const generateStars = (n) => {
      for (let i = 0; i < n; i++) {
        const div = document.createElement("div");
        div.className =
          i % 20 === 0
            ? "star star--big"
            : i % 9 === 0
            ? "star star--medium"
            : "star";
        // random everywhere!
        div.setAttribute(
          "style",
          `top:${Math.round(Math.random() * wH)}px;left:${Math.round(
            Math.random() * wW
          )}px;animation-duration:${
            Math.round(Math.random() * 3000) + 3000
          }ms;animation-delay:${Math.round(Math.random() * 3000)}ms;`
        );
        document.body.appendChild(div);
      }
    };

    generateStars(150);

    // Clean up function to remove stars when the component unmounts
    return () => {
      const stars = document.querySelectorAll(".star");
      stars.forEach((star) => star.remove());
    };
  }, [wH, wW]);
};

function App() {
  return (
    <>
      <Navbar />
      <div className="h-navbar-height"></div>
      <div className="">
        <Hero />
      </div>

      <div className="bg-2">
        <div id="stars-group-1"></div>
        <div id="stars-group-2"></div>
        <div id="stars-group-3"></div>
        <div id="stars-group-4"></div>
        <div id="stars-group-5"></div>
        <div id="stars-group-6"></div>
        <StarField /> {/* Include the StarField component here */}
        <div className=" mp-6">
          <Partners />
        </div>
        <div className="py-6 mt-4 sm:mt-20">
          <SectionVideo />
        </div>
        <div className="py-6 sm:py-6 ">
          <Roadmap />
        </div>
        <div className="py-6 ">
          <Tokonomics />
        </div>
        <div className="py-6 mt-4 sm:mt-20">
          <section>
            <div className="container-wrapper relative">
              <img
                src="images/smile.png"
                alt=""
                className="h-[70px] absolute top-[-5%] LEFT-0 floating hidden sm:block"
              />
              <img
                src="images/smile.png"
                alt=""
                className="h-[70px] absolute top-[-5%] right-0 floating hidden sm:block"
              />
              <div className="w-full ">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="mx-auto video-bg border border-[#aeaeae] w-full"
                >
                  <source src="images/video-bg2.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </section>
        </div>
        <div className="py-6 mb-12">
          <HowToUse />
        </div>
        {/* 
        <div className="py-6 ">
          <CounterSection/>
        </div> */}
        <div className="py-6 ">
          <JoinNow />
        </div>
        <div className=" pt-6 pb-3">
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;
