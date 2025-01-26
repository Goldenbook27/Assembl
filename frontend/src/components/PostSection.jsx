import React from "react";
import Image01 from "../assets/material-symbols_image.png";
import Image02 from "../assets/mingcute_video-fill.png";
import Image03 from "../assets/raphael_arrowdown.png";
import Image04 from "../assets/1.png";

const PostSection = () => {
  return (
    <div className="h-[1171px] w-[760px] flex flex-col gap-5 bg-[#EEEEEE]">
      <div className="h-[186px] flex flex-col p-5 gap-5 bg-[#FFFFFF] rounded-[5px]">
        <input
          className="w-[720px] h-[101px] bg-[#EEEEEE] rounded-[100px]"
          type="text"
          placeholder="   Share Something..."
        />
        <div className="flex flex-row gap-5">
          <img src={Image01} alt="img_icon" />
          <div>Image</div>
          <img src={Image02} alt="vid_icon" />
          <div>Video</div>
        </div>
        <div className="pt-[10px] pr-[20px] pb-[10px] pl-[649px]">
          <button className="bg-[#323232] h-[41px] w-[71px] rounded-[100px]  text-white">
            Post
          </button>
        </div>
      </div>
      <div className="h-[21px] flex flex-row gap-5 justify-center items-center">
        <div className="w-[600px] h-[1px] rounded-[100px] border-[2px] bg-[#323232]"></div>
        <div className="w-[140px] flex flex-row gap-2.5">
          <div>Sort by:</div>
          <div className="flex flex-row gap-1.25">
            <div>Newest</div>
            <img src={Image03} alt="arrow_down_icon" />
          </div>
        </div>
      </div>
      <div className="h-[452px] p-5 flex flex-col gap-5 bg-white rounded-[5px] ">
        <div className="h-[56px] w-[720px]  justify-between">
          <div className="w-[223px] flex flex-row gap-2.5 ">
            <img className="h-[36px] w-[36px]" src={Image04} alt="User_icon" />
            <div className="flex flex-col gap-1.25">
              <div className="text-xl font-poppins font-semibold">
                TravelWithEmma
              </div>
              <div className="text-[14px] font-poppins font-normal">
                12 minutes ago
              </div>
            </div>
          </div>
        </div>
        <div className=" text-[14px]">
          🌍✨ Exploring the Hidden Gems of Italy! ✨🌍 Ciao, fellow
          wanderlusters! <br />
          <br /> This week, I embarked on a journey through the breathtaking
          landscapes of Umbria, and I can’t wait to share my experiences with
          you! <br />
          <br />
          One of my favorite stops was the charming town of Deruta, known for
          its stunning ceramics and rich history. 🏺 I visited a local pottery
          workshop where artisans demonstrated their craft. It was fascinating
          to see how they transform clay into beautiful pieces of art!
          <br />
          <br />
          Afterward, I strolled through the picturesque streets, indulging in
          delicious local cuisine. If you ever find yourself in Deruta, don’t
          miss out on trying the handmade pasta at Trattoria Da Gino—trust me,
          it’s a culinary delight! 🍝
          <br />
          <br />
          What’s your favorite hidden gem in Italy? Share your recommendations
          below! 👇💬 #TravelDiaries #Umbria #HiddenGems
        </div>
      </div>
      <div className="h-[452px] p-5 flex flex-col gap-5 bg-white rounded-[5px] ">
        <div className="h-[56px] w-[720px]  justify-between">
          <div className="w-[223px] flex flex-row gap-2.5 ">
            <img className="h-[36px] w-[36px]" src={Image04} alt="User_icon" />
            <div className="flex flex-col gap-1.25">
              <div className="text-xl font-poppins font-semibold">
                FitnessGuruMike
              </div>
              <div className="text-[14px] font-poppins font-normal">
                4 Hours ago
              </div>
            </div>
          </div>
        </div>
        <div className=" text-[14px]">
          🏋️‍♂️💪 Kickstart Your Fitness Journey in 2025! 💪🏋️‍♂️
          <br />
          <br />
          Hey everyone! As we dive deeper into the new year, I wanted to take a
          moment to talk about setting realistic fitness goals. 🎯 It’s easy to
          get caught up in the excitement of New Year’s resolutions, but
          sustainable change is what truly matters. Here are my top three tips
          for making your fitness journey successful: <br />
          1.Set SMART Goals: Specific, Measurable, Achievable, Relevant, and
          Time-bound goals help you stay focused and motivated. Instead of
          saying “I want to get fit,” try “I will exercise for at least 30
          minutes three times a week.”
          <br />
          2.Find Your Community: Surround yourself with like-minded individuals
          who inspire and support you. Join a local gym or online fitness group
          where you can share your progress and challenges! 🤝
          <br />
          3.Celebrate Small Wins: Every step counts! Whether it’s lifting
          heavier weights or simply getting out for a walk, celebrate your
          achievements along the way. 🎉
          <br />
          <br />
          Let’s make 2025 our healthiest year yet! What are your fitness goals?
          Share them in the comments! #FitnessJourney #NewYearNewYou
        </div>
      </div>
    </div>
  );
};

export default PostSection;