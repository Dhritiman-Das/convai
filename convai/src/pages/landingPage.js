import React from "react";
import Chatwindow from "../component/chatwindow/chatwindow";
import Config from "../component/config/config";

const LandingPage = () => {
  return (
    <div className="window h-[100vh] w-[100vw] bg-primary flex text-fourth">
      <div className="w-9/12 px-12 border-r-2">
        <Chatwindow />
      </div>
      <div className="w-3/12 px-5">
        <Config />
      </div>
    </div>
  );
};

export default LandingPage;
