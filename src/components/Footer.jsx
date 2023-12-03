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
            <a href="/" className=' text-3xl text-white hover:text-[#3557d5] '><AiOutlineTwitter/></a>
            <a href="/" className=' text-3xl text-white hover:text-[#3557d5] '><BiLogoTelegram /></a>
            <a href="/" className=' text-3xl text-white hover:text-[#3557d5]'><FaInstagram /></a>
            <a href="/" className=' text-3xl text-white hover:text-[#3557d5]'><FaMedium /></a>

        </div>
        <p className=' text-[#747474] text-sm font-semibold'>
        Copyright WhatBot - All right reserved
        </p>
    </footer>
<img src="images/blur.png" alt="" className=' absolute left-0 -bottom-[12%]' />
  </section>
  )
}

export default Footer