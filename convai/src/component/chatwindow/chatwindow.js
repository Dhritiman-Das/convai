import React from "react";
import Header from "./header";
import Body from "./body";
import MessageBar from "./messageBar";

const Chatwindow = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header text="Abhijit Chatbot" />
      <Body />
      <MessageBar />
    </div>
  );
};

export default Chatwindow;
