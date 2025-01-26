import React from "react";
import PostSection from "../components/PostSection";
import HGCSection from "../components/HGCSection";
import { UserDetailsSection } from "../components/UserDetailsSection";

const Homepage = () => {
  return (
    <div className="bg-[#EEEEEE] flex p-5 gap-5 flex-row">
      <UserDetailsSection />
      <PostSection />
      <HGCSection />
    </div>
  );
};

export default Homepage;
