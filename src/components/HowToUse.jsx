import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import {Autoplay,  Navigation } from "swiper/modules";

import SliderNavigationButton from "./SliderNavigationButton";

const data = [
  {
    title: "setp 1",
    subTitle: "Lorem, ipsum dolor sit amet consectetur aotam facilis autem sed  quae fugit sdfgdf gdfgsdfgdfshsfghh amet dolore neque esse. ",
 
    
  },
  {
    title: "step 2",
    subTitle: "Lorem, ipsum dolor sit amet consectetur aotam facilis autem sed  quae fugit sdfgdf gdfgsdfgdfshsfghh amet dolore neque esse.",
    
  },
  {
    title: "step 3",
    subTitle: "Lorem, ipsum dolor sit amet consectetur aotam facilis autem sed  quae fugit sdfgdf gdfgsdfgdfshsfghh amet dolore neque esse.",
   
  },
  {
    title: "step 4",
    subTitle: "Lorem, ipsum dolor sit amet consectetur aotam facilis autem sed  quae fugit sdfgdf gdfgsdfgdfshsfghh amet dolore neque esse.",
    
  },
];


const Card = ({ title, subTitle }) => {
  return (
    <div>
    <div className="how-card h-full">
      <h1 className="text-white font-bitsu text-4xl pb-4"> {title}</h1>
      <p>
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
          <h1 className="text-[#fff] text-5xl  font-bold my-12  ptext uppercase text-center font-bitsu">
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
