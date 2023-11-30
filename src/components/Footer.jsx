import React from 'react'
import { AiOutlineTwitter } from 'react-icons/ai'

function Footer() {
  return (
  <section>
    <footer className=' text-center'>
        <img src="images/logo.png" alt="" className=' mx-auto' />

        <div className='flex'>
            <a href="/"><AiOutlineTwitter/></a>
            <a href="/"><AiOutlineTwitter/></a>
            <a href="/"><AiOutlineTwitter/></a>
        </div>
        <p>
        Copyright WhatBot - All right reserved
        </p>
    </footer>
  </section>
  )
}

export default Footer