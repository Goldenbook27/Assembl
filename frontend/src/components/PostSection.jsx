import React from "react";
import Image01 from "../assets/material-symbols_image.png";
import Image02 from "../assets/mingcute_video-fill.png";
import Image03 from "../assets/raphael_arrowdown.png";
import Image04 from "../assets/1.png";
import axios from 'axios'
import { useState,useEffect } from "react";
const PostSection = () => {
  const [posts, setPosts] = useState([]);
  const [text, settext] = useState("");
  
  useEffect(() => {
    
    const fetchPosts = async () => {
      try {
        
        const response = await fetch("http://localhost:3000/v1/api/post/feed");
        const data =await response.json()
        setPosts(data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };
    fetchPosts();
  }, []);
  const handlePostButton = ()=>{
    console.log(text)
    const data = {
      text
    }
    axios.post('http://localhost:3000/v1/api/post/create',)
  }
  return (
    <div className="h-[1171px] w-[760px] flex flex-col gap-5 bg-[#EEEEEE]">
      <div className="h-[186px] flex flex-col p-5 gap-5 bg-[#FFFFFF] rounded-[5px]">
        <input
          className="w-[720px] h-[101px] bg-[#EEEEEE] rounded-[100px]"
          type="text"
          placeholder="   Share Something..."
          onChange={(e)=>{settext(e.target.value)}}
        />
        <div className="flex flex-row gap-5">
          <img src={Image01} alt="img_icon" />
          <div>Image</div>
          <img src={Image02} alt="vid_icon" />
          <div>Video</div>
        </div>
        <div className="pt-[10px] pr-[20px] pb-[10px] pl-[649px]">
          <button className="bg-[#323232] h-[41px] w-[71px] rounded-[100px]  text-white" onClick={handlePostButton}>
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
      {posts.map((post, index) => (
        <div
          key={index}
          className="h-[452px] p-5 flex flex-col gap-5 bg-white rounded-[5px]"
        >
          <div className="h-[56px] w-[720px] flex justify-between">
            <div className="w-[223px] flex flex-row gap-2.5">
              <img className="h-[36px] w-[36px]" src={Image04} alt="User_icon" />
              <div className="flex flex-col gap-1.25">
                <div className="text-xl font-poppins font-semibold">
                  {post.username}
                </div>
                <div className="text-[14px] font-poppins font-normal">
                  {post.createdAt}
                </div>
              </div>
            </div>
          </div>
          <div className="text-[14px]">{post.text}</div>
        </div>
      ))}
      
    </div>
  );
};

export default PostSection;