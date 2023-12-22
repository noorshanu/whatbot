import React from "react";

function SectionVideo() {
  return (
    <section className=" relative">
      <img src="images/part1.png" alt="" className=" absolute -left-[14%] -top-[25%]" />
      <div className="container-wrapper relative">
   <div>
    <h1 className=" font-druk text-5xl uppercase text-center">
      partne<span className="txt-color font-druk text-5xl uppercase">rship</span>
    </h1>
   </div>
        <div className="w-full mx-auto ">
          <img src="images/partner.png" alt="" className="mx-auto -mt-16" />
          {/* <video
            autoPlay
            loop
            muted
            playsInline
            className="mx-auto video-bg border border-[#aeaeae] w-full"
          >
            <source src="images/video-bg.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video> */}
        </div>

        <div className=" py-4 mt-2 sm:mt-8 mx-auto flex justify-center items-center gap-8 ">
          <a
            href="/"
            className="bg-[#FFF] px-7 sm:px-14 py-2 mr-4 font-bitsu text-base sm:text-xl flex items-center rounded-md gap-3 uppercase text-black"
          >
            Audit 
            {/* <img src="images/coinsult.png" alt="" className="h-[14px] sm:h-[24px]" /> */}
          </a>
          <a
            href="/"
            className="bg-[#FFFFFF14] px-7 sm:px-14 py-2 font-bitsu text-base sm:text-xl rounded-md flex items-center gap-3 uppercase"
          >
            {" "}
            Kyc 
            {/* <img src="images/solidp.png" alt="" className="h-[14px] sm:h-[24px]" /> */}
          </a>
        </div>
      </div>
    </section>
  );
}

export default SectionVideo;
