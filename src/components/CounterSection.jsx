import React from 'react'
import CountUp from 'react-countup';

function CounterSection() {
  return (
    <section>

      <div className='container-wrapper'>
        <div className=' flex flex-col sm:flex-row justify-evenly items-center rounded-lg border-[0.5px] border-[#383838ac] py-4'>

        <div className='font-bitsu text-lg sm:text-4xl text-center'>
          <CountUp  start={0}  end={100} className=' font-bitsu text-lg sm:text-4xl' /> + <br />
          Coin Deployed

          </div>

          <div className='font-bitsu text-lg sm:text-4xl text-center'>
          <CountUp  start={0}  end={5000} className=' font-bitsu text-lg sm:text-4xl' /> $ <br />
          Fee Genrated

          </div>

          <div className='font-bitsu text-lg sm:text-4xl text-center'>
          <CountUp  start={0}  end={4500} className=' font-bitsu text-lg sm:text-4xl' /> $ <br />
          Revenue Distribute

          </div>

        </div>
      </div>
    </section>
  )
}

export default CounterSection