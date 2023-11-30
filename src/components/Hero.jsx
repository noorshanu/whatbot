import React from "react";

function Hero() {
  return (
    <section className="hero-main">
      <div className="container-wrapper">
        <div className=" flex justify-start items-center ">
          <div className=" max-w-xl mt-[5%] sm:mt-[15%]">
            <h1 className=" text-white font-bitsu text-3xl sm:text-6xl font-normal pb-2">WHATBOT</h1>
            <p className=" font-poppins text-base sm:text-xl font-medium pb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam,
            </p>

            <div className=" py-4 ">
                <a href="/" className="btn-main px-14 py-3 mr-4 font-bitsu text-base sm:text-xl">Buy Now</a>
                <a href="/" className="btn-main px-14 py-3 font-bitsu text-base sm:text-xl" > Join us</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
