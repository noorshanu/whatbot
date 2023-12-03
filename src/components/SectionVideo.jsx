import React from "react";

function SectionVideo() {
  return (
    <section>
      <div className="container-wrapper relative">
        <img
          src="images/smile.png"
          alt=""
          className="h-[70px] absolute top-[-5%] LEFT-0 floating sm:block hidden"
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
            <source src="images/video-bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>

        <div className=" py-4 mt-2 sm:mt-8 mx-auto flex justify-evenly items-center gap-8 ">
          <a
            href="/"
            className="btn-main px-7 sm:px-10 py-3 mr-4 font-bitsu text-base sm:text-xl flex items-center gap-3"
          >
            Audit <img src="images/coinsult.png" alt="" className="h-[14px] sm:h-[24px]" />
          </a>
          <a
            href="/"
            className="btn-main px-7 sm:px-10 py-3 font-bitsu text-base sm:text-xl flex items-center gap-3"
          >
            {" "}
            Kyc <img src="images/solidp.png" alt="" className="h-[14px] sm:h-[24px]" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default SectionVideo;
