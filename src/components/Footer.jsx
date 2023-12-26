import React from 'react'
import { AiOutlineTwitter } from 'react-icons/ai'
import { BiLogoTelegram } from "react-icons/bi";
import { FaInstagram } from "react-icons/fa";
import { FaMedium } from "react-icons/fa6";

function Footer() {
  return (
  <section className='relative'>
    <footer className=' text-center mt-3 sm:mt-8'>
        <img src="images/logo.png" alt="" className=' mx-auto' />

        <div className='flex justify-center items-center gap-6 py-5 relative z-50'>
            <a href="https://x.com/whatbotofficial" target='_blank' className=' text-3xl text-white hover:text-[#3557d5] '><AiOutlineTwitter/></a>
            <a href="https://t.me/WhatBotOfficial" target='_blank' className=' text-3xl text-white hover:text-[#3557d5] '><BiLogoTelegram /></a>
            <a href="/" className=' text-3xl text-white hover:text-[#3557d5]'><FaInstagram /></a>
            <a href="/" className=' text-3xl text-white hover:text-[#3557d5]'><FaMedium /></a>

        </div>
        <div className=' border-t border-[#393939]'>
        <p className=' text-[#747474] text-sm font-semibold font-c pb-2 py-6'>
        © Copyright 2023, All Rights Reserved by  WhatBot 
        </p>
        </div>
       
    </footer>

  </section>
  )
}

export default Footer