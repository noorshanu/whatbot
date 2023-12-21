import React from 'react'

function JoinNow() {
  return (
   <section className=' relative z-50'>
    <img src="images/line.png" alt="" className='mx-auto absolute -top-[21%] left-0 right-0' />
    <div className='container-wrapper'>
        <div className='joinus py-16 text-center my-5 max-w-4xl mx-auto relative z-40'>
            <h1 className=' text-xl sm:text-4xl font-druk mb-2' >Join  <span className=' font-druk txt-color'>The </span></h1>
             <h1 className=' text-xl sm:text-4xl font-druk mb-12' >
             WHATBOT <span className='txt-color font-druk'>  Community </span></h1>

          
            <a href="/" className="bg-white rounded-md px-8 sm:px-10 py-2 text-black font-semibold mt-6 font-cairo text-sm sm:text-base">Join The Community</a>

        </div>

    </div>
   </section>
  )
}

export default JoinNow