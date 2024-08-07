import React, { useState } from "react";
import Header from "../assets/components/common/Header";
import EditorPage from "../assets/components/Editor";
import BuddyChat from "../assets/components/chat/BuddyChat";
import Sidebar from "../assets/components/common/Sidebar";

const Home = () => {
  
  return (
    <div className="min-h-screen md:h-screen flex flex-col">
      <Header/>
      <div className=" w-full flex flex-col md:flex-row flex-grow ">
        <div className="w-[20%] p-2 bg-gray-200 lg:block hidden">
          <div className="bg-white rounded-md flex flex-col flex-grow overflow-y-auto h-full">
            <Sidebar setSidebartoggle={undefined}/>
          </div>
        </div>
        <div className="w-full md:w-[60%] lg:w-[50%]  p-2 bg-gray-200">
          <div className="bg-white w-full h-full rounded-md overflow-y-auto">
            <EditorPage defaultValue={""} />
          </div>
        </div>
        <div className="w-full md:w-[40%] lg:w-[30%] p-2  bg-gray-200 flex flex-col gap-3">
          <div className="bg-white w-full h-[50%]  rounded-md overflow-y-auto">
            <BuddyChat/>
            </div>
          <div className="bg-white w-full h-[50%] rounded-md">
            <BuddyChat/>
            </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
