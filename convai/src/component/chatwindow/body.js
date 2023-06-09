import React from "react";
import Message from "./message";
import { useSelector } from "react-redux";

const Body = () => {
  const chatHistory = useSelector((state) => state.emulator.chatHistory);
  return (
    <div className="flex-grow overflow-y-auto">
      {chatHistory.map((item) => (
        <>
          {item.role == "human" && (
            <Message by="human" message={item.content} />
          )}
          {item.role == "bot" && <Message by="bot" message={item.content} />}
        </>
      ))}
    </div>
  );
};

export default Body;
