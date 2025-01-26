import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const user = useSelector((state) => state.auth);
  const navigate = useNavigate();

  if (user.user) {
    return (
      <div className="flex flex-row justify-between p-5 bg-[#FFFFFF]">
        <div className="font-semibold text-3xl">Assembl</div>
        <button className="rounded-[5px] pt-2.5 pr-5 pb-2.5 pl-5 font-semibold text-sm bg-[#98EFDA]">
          Log Out
        </button>
      </div>
    );
  } else {
    return (
      <div className="flex flex-row justify-between p-5 bg-[#FFFFFF]">
        <div className="font-poppins font-semibold text-3xl leading-[42px]">
          Assembl
        </div>
        <div className="flex flex-row gap-5">
          <button className="font-poppins font-semibold text-sm leading-[21px]">
            Home
          </button>
          <button className="font-poppins font-semibold text-sm leading-[21px]">
            About Us
          </button>
          <button className="font-poppins font-semibold text-sm leading-[21px]">
            Testimonials
          </button>
          <button className="font-poppins font-semibold text-sm leading-[21px]">
            Contact
          </button>
        </div>
        <div className="flex flex-row gap-5">
          <button
            onClick={() => navigate("/auth")}
            className="rounded-[5px] pt-2.5 pr-5 pb-2.5 pl-5 font-poppins font-semibold text-sm leading-[21px] bg-[#98EFDA]"
          >
            Get Started
          </button>
        </div>
      </div>
    );
  }
};

export default Navbar;
