import React from "react";

function Hero() {
  return (
    <section className="hero-main relative">
      <div className="container-wrapper">
        <div className=" flex justify-start items-center flex-col sm:flex-row ">
          <div className=" max-w-xl mt-[15%] sm:mt-[15%]">
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
          <div className=" relative">
            <img src="images/coin-1.png" alt="" className=" mt-0 sm:mt-[20rem] floating" />
            <img src="images/bot.svg" alt="" className="  h-[400px] block sm:hidden floating" />

          </div>
        </div>
      </div>
      <img src="images/coin-2.png" alt="" className=" absolute top-[40%] right-[-2%] floating" />

    </section>
  );
}

export default Hero;
