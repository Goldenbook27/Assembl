import React from "react";
import PostSection from "../components/PostSection";
import HGCSection from "../components/HGCSection";

const Homepage = () => {
  return (
    <div className="bg-[#EEEEEE] flex p-5 gap-5 flex-row">
      <PostSection />
      <HGCSection />
    </div>
  );
};

export default Homepage;
