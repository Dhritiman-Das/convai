import React from "react";
import Message from "./message";
import { useSelector } from "react-redux";

const Body = () => {
  const chatHistory = useSelector((state) => state.emulator.chatHistory);
  return (
    <div className="flex-grow overflow-y-auto">
      {chatHistory.map((item) => (
        <>
          {item.by == "human" && <Message by="human" message={item.message} />}
          {item.by == "bot" && <Message by="bot" message={item.message} />}
        </>
      ))}
    </div>
  );
};

export default Body;
