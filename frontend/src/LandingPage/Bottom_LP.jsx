import React from "react";

const Bottom_LP = () => {
  return (
    <div className="bg-white">
      <div className="flex flex-col h-[462px] justify-center items-center gap-10  bg-[#EEEEEE]">
        <div className="font-semibold text-[28px]">How it Works</div>
        <div className="gap-10  flex flex-row">
          <div className="flex flex-col justify-center w-[426.7px] h-[220px] items-center ">
            <div className="w-[100px] h-[100px] rounded-[100px] bg-[#98EFDA] p-5 gap-2.5 flex justify-center items-center font-semibold text-[28px] ">
              1
            </div>
            <div className='text-[20px]'>Sign Up/Create an Account<br />To start Assembling </div>
          </div>
          <div className="flex flex-col justify-center w-[426.7px] h-[220px] items-center">
            <div className="w-[100px] h-[100px] rounded-[100px] bg-[#98EFDA] p-5 gap-2.5 flex justify-center items-center font-semibold text-[28px] ">
              2
            </div>
            <div className='text-[20px]'>
              Search or Create a Group based on your skills and interests.
            </div> 
          </div>
          <div className="flex flex-col justify-center w-[426.7px] h-[220px] items-center">
            <div className="w-[100px] h-[100px] rounded-[100px] bg-[#98EFDA] p-5 gap-2.5 flex justify-center items-center font-semibold text-[28px] ">
              3
            </div>
            <div className='text-[20px]'>
              Collaborate, build, and participate in hackathons together.
            </div>
          </div>
        </div>
      </div>
      <div className="h-[522px] bg-white flex flex-col justify-center items-center gap-10 ">
        <div className="font-semibold text-[28px]">Why Join Us?</div>
        <div className=" flex flex-row gap-10">
            <div className="p-10 flex flex-col gap-5 w-[310px] h-[280px] border-[2px] rounded-[5px] ">
                <div className="font-semibold text-[20px]">Find Teams Easily</div>
                <div className="text-[20px]">Match with others based on your skills, location, and interests.</div>
            </div>
            <div className="p-10 flex flex-col gap-5 w-[310px] h-[280px] border-[2px] rounded-[5px] ">
                <div className="font-semibold text-[20px]">Build Your Dream Team</div>
                <div className="text-[20px]">Start your own team and invite people to collaborate.</div>
            </div>
            <div className="p-10 flex flex-col gap-5 w-[310px] h-[280px] border-[2px] rounded-[5px] ">
                <div className="font-semibold text-[20px]">Real-Time Communication</div>
                <div className="text-[20px]">Group chats, direct messages, and video calls to stay connected.</div>
            </div>
            <div className="p-10 flex flex-col gap-5 w-[310px] h-[280px] border-[2px] rounded-[5px] ">
                <div className="font-semibold text-[20px]">Join Hackathons</div>
                <div className="text-[20px]">Sign up for hackathons and work with teammates in real-time.</div>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Bottom_LP;
