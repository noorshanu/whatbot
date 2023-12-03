import React from "react";

function SectionVideo() {
  return (
    <section>
      <div className="container-wrapper">
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

        <div className=" py-4  mx-auto flex justify-evenly items-center ">
          <a
            href="/"
            className="btn-main px-7 sm:px-14 py-3 mr-4 font-bitsu text-base sm:text-xl"
          >
            Audit
          </a>
          <a
            href="/"
            className="btn-main px-7 sm:px-14 py-3 font-bitsu text-base sm:text-xl"
          >
            {" "}
            KYC
          </a>
        </div>
      </div>
    </section>
  );
}

export default SectionVideo;
