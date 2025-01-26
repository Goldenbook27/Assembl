import React from 'react'

const Navbar = () => {
  return (
    <div className="flex flex-row justify-between w-[1440px] h-[82px] p-5">
      <div className="font-poppins font-semibold text-3xl leading-[42px]">Assembl</div>
      <div className="flex flex-row gap-5">
        <button className="font-poppins font-semibold text-sm leading-[21px]">Home</button>
        <button className="font-poppins font-semibold text-sm leading-[21px]">About Us</button>
        <button className="font-poppins font-semibold text-sm leading-[21px]">Testimonials</button>
        <button className="font-poppins font-semibold text-sm leading-[21px]">Contact</button>
      </div>
      <div className="flex flex-row gap-5">
        <button className="rounded-[5px] pt-2.5 pr-5 pb-2.5 pl-5 font-poppins font-semibold text-sm leading-[21px] bg-[#98EFDA]">Log In</button>
        <button className="rounded-[5px] pt-2.5 pr-5 pb-2.5 pl-5 font-poppins font-semibold text-sm leading-[21px] bg-[#98EFDA]">Sign Up</button>
      </div>
    </div>
  )
}

export default Navbar
