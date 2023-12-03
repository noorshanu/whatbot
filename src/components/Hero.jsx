import React from "react";
import { AiOutlineTwitter } from "react-icons/ai";
import { BiLogoTelegram } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";
function Hero() {
  return (
    <section className="hero-main relative">
      <div className="container-wrapper">
        <div className=" flex justify-start items-center flex-col-reverse sm:flex-row ">
          <div className=" max-w-xl mt-[15%] sm:mt-[19%]">
            <h1 className=" text-white font-bitsu text-3xl sm:text-4xl font-medium pb-2">
              Unleash Your Crypto Potential With Ease !
            </h1>
            <p className=" font-poppins text-base sm:text-sm font-light pb-4">
              WhatBot is here to empower your crypto journey. Whether you're a
              newbie or a seasoned pro, we've got your back. Our user-friendly
              platform simplifies token creation and management, ensuring you
              have the keys to unlock your crypto potential. Explore the
              possibilities with WhatBot by your side.
            </p>

            <div className=" py-4 flex justify-start items-center gap-8 ">
              <a
                href="/"
                className="btn-main px-4 sm:px-10 py-3 mr-4 font-bitsu text-base sm:text-xl flex items-center gap-3"
              >
                Buy Now <img src="images/pinklogo.jpg" alt="" className="h-[24px]" />
              </a>
              <a
                href="https://t.me/whatbotchat" target="_blank"
                className="btn-main px-7 sm:px-10 py-3 font-bitsu text-base sm:text-xl flex items-center gap-3"
              >
                {" "}
                Join us <BiLogoTelegram />
              </a>
            </div>

            <div className="flex justify-start items-center gap-6 py-5">
              <a
                href="https://x.com/whatbotofficial" target="_blank"
                className=" text-3xl text-white hover:text-[#3557d5] "
              >
                <AiOutlineTwitter />
              </a>
              <a
                href="https://t.me/whatbotchat" target="_blank"
                className=" text-3xl text-white hover:text-[#3557d5] "
              >
                <BiLogoTelegram />
              </a>
              <a href="/" className=" text-3xl text-white hover:text-[#3557d5]">
                <FaInstagram />
              </a>
              <a href="/" className=" text-3xl text-white hover:text-[#3557d5]">
                <FaMedium />
              </a>
            </div>
          </div>
          <div className=" relative">
            <img
              src="images/coin-1.png"
              alt=""
              className=" mt-0 sm:mt-[0rem] floating hidden sm:block"
            />
            <img
              src="images/bot.svg"
              alt=""
              className="  h-[250px] block sm:hidden floating"
            />
          </div>
        </div>
      </div>
      <img
        src="images/coin-2.png"
        alt=""
        className=" absolute top-[20%] right-[-2%] floating sm:block hidden"
      />
    </section>
  );
}

export default Hero;
