import React from 'react'
import Image1 from '../../assets/Frame11.png'
const Herosection = () => {
  return (
    <div className="w-[1440] h-[540] flex flex-row bg-[#f0ecec] justify-center items-center">
      <div className='w-[900] h-[540] p-10 gap-10 flex flex-col justify-between'>
        <div className='font-poppins font-semibold text-2xl leading-[42px]'>Assemble Talent, Achieve Greatness</div>
        <div className='font-poppins font-normal text-base leading-[30px]'>Join a Community of Innovators and Leaders Committed to Unlocking Their Full Potential Through Collaborative Learning, Tailored Resources, and Inspiring Success Stories.</div>
        <div><button className="rounded-[5px] pt-2.5 pr-5 pb-2.5 pl-5 font-poppins font-semibold text-sm leading-[21px] bg-[#98EFDA]">Get Started</button></div>
      </div>
      <div className='w-[540] h-[540]'>
        <img src={Image1} alt="teamimg" />
      </div>
    </div>
  )
}

export default Herosection
