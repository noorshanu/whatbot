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
          <div className=" max-w-3xl mt-[15%] sm:mt-[25%]">
            <h1 className=" text-white font-druk txt-color text-3xl sm:text-5xl font-medium pb-8">
              Unleash Your Crypto Potential With Ease !
            </h1>
            <p className=" font-cairo font-normal  text-base sm:text-base  pb-4">
              WhatBot is here to empower your crypto journey. Whether you're a
              newbie or a seasoned pro, we've got your back. Our user-friendly
              platform simplifies token creation and management, ensuring you
              have the keys to unlock your crypto potential. Explore the
              possibilities with WhatBot by your side.
            </p>
            <p>Contract: 0x4F27633e8b1CFd5E043c68cDCD81C0bbfDB1cf14</p>

            <div className=" py-4 flex justify-start items-center gap-8 ">
              <a
                href="https://www.dextools.io/app/en/ether/pair-explorer/0x0ac9bf2ea91e74b9677b58aa062632a8c06fd575" target="_blank"
                className="bg-white rounded-md px-4 sm:px-10 py-3 mr-4 font-cairo font-semibold text-base sm:text-xl flex items-center text-black gap-3"
              >
                Buy Now <img src="images/dexo.png" alt="" className="h-[24px]" />
              </a>
              <a
                href="https://t.me/WhatBotOfficial" target="_blank"
                className="bg-[#FFFFFF14] rounded-md px-7 sm:px-10 py-3 font-cairo font-semibold text-base sm:text-xl flex text-white items-center gap-3"
              >
                {" "}
                Join us <BiLogoTelegram />
              </a>
            </div>

            <div className=" hidden sm:flex flex-col absolute left-[5%] top-[30%] justify-start items-center gap-6 py-5">
              <a
                href="https://x.com/whatbotofficial" target="_blank"
                className=" text-3xl  btn-so "
              >
                <AiOutlineTwitter />
              </a>
              <a
                href="https://t.me/whatbotchat" target="_blank"
                className=" text-3xl btn-so "
              >
                <BiLogoTelegram />
              </a>
              <a href="/" className=" text-3xl btn-so">
                <FaInstagram />
              </a>
              <a href="/" className=" text-3xl btn-so">
                <FaMedium />
              </a>
            </div>
          </div>
          <div className=" relative">
            {/* <img
              src="images/coin-1.png"
              alt=""
              className=" mt-0 sm:mt-[0rem] floating hidden sm:block"
            /> */}
            <img
              src="images/bot.svg"
              alt=""
              className="  h-[250px] block sm:hidden floating"
            />
          </div>
        </div>
      </div>
      {/* <img
        src="images/coin-2.png"
        alt=""
        className=" absolute top-[20%] right-[-2%] floating sm:block hidden"
      /> */}
    </section>
  );
}

export default Hero;
