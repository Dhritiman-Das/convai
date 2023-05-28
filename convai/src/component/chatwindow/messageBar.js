import React from "react";

const MessageBar = () => {
  return (
    <div className="flex my-3 h-[40px] gap-x-2">
      <input
        type="text"
        placeholder="Type your message..."
        className="w-11/12 rounded-lg px-3 placeholder-gray-400-500 text-gray-700 outline-none"
      />
      <div className="text-gray-200 w-1/12 flex justify-center items-center bg-gradient-to-br from-third to-purple-700 rounded-lg cursor-pointer hover:from-secondary hover:to-third transition-all">
        Send
      </div>
    </div>
  );
};

export default MessageBar;
