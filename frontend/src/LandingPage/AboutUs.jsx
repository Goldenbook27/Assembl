import React from 'react'
import Image2 from '../assets/Frame12.png'

const AboutUs = () => {
  return (
    <div>
      <div className="w-[1440] h-[540] flex flex-row justify-center bg-white items-center">
            <div className='w-[540] h-[540]'>
              <img src={Image2} alt="teamimg" />
            </div>
            <div className='w-[900] h-[540] p-10 gap-10 flex flex-col justify-between'>
              <div className='font-poppins font-semibold text-2xl leading-[42px]'>About Us</div>
              <div className='font-poppins font-normal text-base leading-[30px]'>At Assembl, we believe that greatness is not just an individual achievement but a collective journey. Our mission is to empower individuals and organizations to unlock their full potential through collaboration, innovation, and continuous learning.</div>
              <div className='font-poppins font-normal text-base leading-[30px]'>Founded by a team of passionate professionals from diverse backgrounds, we recognized the need for a platform that brings together talent from various fields. Our vision is to create a vibrant community where ideas flourish, skills are honed, and success stories are born.</div>
            </div>
          </div>
    </div>
  )
}

export default AboutUs
