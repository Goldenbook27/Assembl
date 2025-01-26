import React, { useState } from "react";
import Image01 from "../assets/2.png";
import Image02 from "../assets/3.png";
import Image03 from "../assets/4.png";
import { CreateGroupPopup } from "./CreateGroupPopup";
import { JoinGrouppopup } from "./JoinGroupPopup";

const HGCSection = () => {
  const [createGroup, setCreateGroup] = useState(false);
  const [joinGroup, setJoinGroup] = useState(false);

  return (
    <div className="flex flex-col gap-5">
      <div className="w-[300px] h-[190px] flex flex-col gap-2.5 p-[20px] rounded-[5px] bg-white ">
        <div className="font-poppins  font-semibold">Hackathons for you</div>
        <div className="flex flex-row gap-2.5">
          <img className="h-[24px] w-[24px]" src={Image01} alt="grp_icon" />
          <div className="flex flex-col gap-1.25">
            <div className="font-poppins  font-semibold">USKILL</div>
            <div>Technical Hackathon</div>
          </div>
        </div>
        <div className="flex flex-row gap-2.5">
          <img className="h-[24px] w-[24px]" src={Image01} alt="grp_icon" />
          <div className="flex flex-col gap-1.25">
            <div className="font-poppins font-semibold">MUMBAI HACKS</div>
            <div>Technical Hackathon</div>
          </div>
        </div>
      </div>
      <div className="w-[300px] h-[190px] flex flex-col gap-2.5 p-[20px] rounded-[5px] bg-white ">
        <div className="font-poppins  font-semibold">Groups for you</div>
        <div className="flex flex-row gap-2.5">
          <img className="h-[24px] w-[24px]" src={Image01} alt="grp_icon" />
          <div className="flex flex-col gap-1.25">
            <div className="font-poppins  font-semibold">UPSKILL Group 01</div>
            <div>Frontend Developer</div>
          </div>
        </div>
        <div className="flex flex-row gap-2.5">
          <img className="h-[24px] w-[24px]" src={Image01} alt="grp_icon" />
          <div className="flex flex-col gap-1.25">
            <div className="font-poppins  font-semibold">
              MUMBAI HACKS Group 01
            </div>
            <div>Frontend Developer</div>
          </div>
        </div>
      </div>
      <div className="w-[300px] h-[190px] flex flex-col gap-2.5 p-[20px] rounded-[5px] bg-white ">
        <div className="font-poppins  font-semibold">Create or Join Group</div>
        <button className="w-[260px] h-[34px] bg-[#EEEEEE] rounded-[5px] pt-[5px] pl-[10px] flex flex-rol gap-2.5 ">
          <img src={Image02} alt="grp_join" />
          <div onClick={() => setJoinGroup(true)}>Join a Group</div>
          {joinGroup && (
            <JoinGrouppopup joinGroup={joinGroup} setJoinGroup={setJoinGroup} />
          )}
        </button>
        <div></div>
        <button className="w-[260px] h-[34px] bg-[#EEEEEE] rounded-[5px] pt-[5px] pl-[10px] flex flex-rol gap-2.5 ">
          <img src={Image03} alt="grp_join" />
          <div onClick={() => setCreateGroup(true)}>Create a Group</div>
          {createGroup && (
            <CreateGroupPopup
              createGroup={createGroup}
              setCreateGroup={setCreateGroup}
            />
          )}
        </button>
      </div>
    </div>
  );
};

export default HGCSection;
