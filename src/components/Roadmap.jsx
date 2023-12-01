import React from 'react'

function Roadmap() {
  return (
    <section className="mt-4 mb-3" id='roadmap'>
      <div className=" mx-auto max-w-7xl mt-32">
        <div className="text-center text-3xl sm:text-5xl">
          <h1 className="text-[#fff] font-bold mb-4 font-bitsu">Road Map</h1>
          <div className="mt-20 max-w-5xl mx-auto grid sm:grid-cols-1 gap-y-10 relative px-5">
          <img className='absolute top-[470px] right-0 h-auto w-[100px] hidden sm:flex' src=' images/roadmap-bg-pattern.svg'/>
            {/* line */}
            <img
              className="h-full w-auto absolute inset-0 sm:mx-auto pl-5 sm:pl-0"
              src=" images/roadmap-line.svg"
            />

            {/* Quarter-1 */}
            <div className="flex justify-center items-center w-full sm:flex-row flex-col gap-y-10">
              <div className="pl-[25px] order-2 sm:order-1 sm:pr-[60px] sm:w-1/2">
                <RoadmapCard
                  text={
                    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the i'
                  }
                />
              </div>
              <img
                src=" images/roadmap-quarter-1.svg"
                className="w-full sm:w-[50%] h-auto ml-[-20px] sm:order-2 order-1"
              />
            </div>

            {/* Quarter-2 */}
            <div className="flex justify-center items-center w-full sm:flex-row flex-col gap-y-10">
              <img
                src="images/roadmap-quarter-2.svg"
                className="sm:w-[50%] h-auto mr-[-20px] hidden sm:flex"
              />
              <img
                src=" images/roadmap-quarter-2-sm.svg"
                className="w-full  h-auto ml-[-25px] flex sm:hidden"
              />

              <div className="pl-[25px] sm:pl-[60px] sm:w-1/2">
                <RoadmapCard
                  text={
                    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the i'
                  }
                />
              </div>
            </div>

            {/* Quarter-3 */}
            <div className="flex justify-center items-center w-full sm:flex-row flex-col gap-y-10">
              <div className="pl-[25px] order-2 sm:order-1 sm:pr-[60px] sm:w-1/2">
                <RoadmapCard
                  text={
                    'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the i'
                  }
                />
              </div>
              <img
                src=" images/roadmap-quarter-3.svg"
                className="w-full sm:w-[50%] h-auto ml-[-20px] sm:order-2 order-1"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Roadmap

let RoadmapCard = ({ text }) => {
  return (
    <div className=" px-[20px] py-[61px] sm:px-[48px] sm:py-12 md:py-[93px] sm:w-full  rounded-3xl flex justify-center items-center text-white bg-white bg-opacity-[0.03] roadmap-blur font-montserrat  text-base">
      {text}
    </div>
  )
}
