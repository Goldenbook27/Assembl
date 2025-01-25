import React from 'react'

const Footer = () => {
  return (
    <div className='bg-[#323232] h-[122px] w-100% p-10 gap-[50px]'>
      <div className="flex flex-row justify-between ">
      <div className="font-semibold text-2xl font-poppins text-white">Assembl</div>
      <div className="flex flex-row gap-10">
        <button className="font-poppins font-normal text-sm leading-[21px] text-white">Terms</button>
        <button className="font-poppins font-normal text-sm leading-[21px] text-white">Privacy Policy</button>
      </div>
      <div className="font-poppins font-normal text-sm leading-[21px] text-white ">
        contact@assembl.com
    </div>
    </div>
    </div>
  )
}

export default Footer
