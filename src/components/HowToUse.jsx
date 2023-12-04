import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import {Autoplay,  Navigation } from "swiper/modules";

import SliderNavigationButton from "./SliderNavigationButton";

const data = [
  {
    title: "setp 1",
    subTitle: "Launch WhatBot: Begin your journey with WhatBot by accessing it on Telegram through the provided link. WhatBot is your all-in-one crypto companion designed to simplify the token creation and management process.  https://t.me/Launch_Whatbot ",
 
    
  },
  {
    title: "step 2",
    subTitle: "Choose Your Blockchain: When you enter WhatBot, you'll have the option to select your desired blockchain – whether it's Binance Smart Chain (BSC) or Ethereum (ETH). This choice gives you flexibility and access to different ecosystems.",
    
  },
  {
    title: "step 3",
    subTitle: "Token Creation: WhatBot makes token creation a breeze. It will prompt you with questions and guide you through the entire process. You'll provide essential information such as the token name, symbol, total supply, and other relevant details. WhatBot ensures that even if you're not a coding expert, you can bring your crypto vision to life.",
   
  },
  {
    title: "step 4",
    subTitle: "Wallet Generation or Integration: You have the option to generate a new wallet directly through WhatBot or integrate your existing wallet. This step is crucial for secure token deployment and management. ",

    
  },

  {
    title: "step 5",
    subTitle: "Token Deployment: With your token details configured, WhatBot will assist you in deploying your token. The process is user-friendly, ensuring that your token creation journey is smooth and hassle-free. After deployment, it's essential to verify your token to ensure its authenticity",
    
    
  },


  {
    title: "step 6",
    subTitle: "Liquidity Setup: Setting up liquidity for your token on a decentralized exchange (DeX) can be a complex task, but not with WhatBot. It simplifies this process, allowing you to provide liquidity with just a few clicks. This step is vital for the liquidity and tradability of your token.",
    
    
  },

  {
    title: "step 7",
    subTitle: "Enable Trading: Once you've established liquidity, you can enable trading for your token. Now, your token is ready to be traded on the blockchain you've chosen. WhatBot ensures that your token is set up for success in the market.",
    
    
  },

  {
    title: "step 8",
    subTitle: "8. Further Customizations: Beyond these essential steps, WhatBot offers a /help menu for additional customizations and options. Whether you need to make adjustments, gather more information, or explore advanced features, WhatBot's /help menu is your go-to resource.",
    
    
  },
];


const Card = ({ title, subTitle }) => {
  return (
    <div>
    <div className="how-card h-full">
      <h1 className="text-white font-bitsu text-4xl pb-4 relative z-10"> {title}</h1>
      <p className="relative z-10">
       {subTitle}
      </p>
    </div>
  </div>
  );
};

function HowToUse() {
  return (
    <section id="howto">
      <div className="container-wrapper relative z-50">
        <div>
          <h1 className="text-[#fff] text-3xl sm:text-5xl  font-bold my-12  ptext uppercase text-center font-bitsu">
            How To use
          </h1>
        </div>

        <Swiper
        slidesPerView={3.2}
        spaceBetween={30}
        loop={true}
        className="py-5 [&_.swiper-slide]:!h-auto"
        modules={[Navigation,Autoplay, ]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
       
        navigation={{
          nextEl: "#nextEl",
          prevEl: "#prevEl",
        }}
        breakpoints={{
          100: {
            slidesPerView: 1,
          },
          500: {
            slidesPerView: 2,
          },
          1024: {
            slidesPerView: 3.2,
          },
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index}>
            <Card
              title={(item.title)}
              subTitle={(item.subTitle)}
           
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex items-center space-x-5 justify-center pt-6">
        <SliderNavigationButton id="prevEl" className="rotate-180" />
        <SliderNavigationButton id="nextEl" />
      </div>
      </div>
    </section>
  );
}

export default HowToUse;
