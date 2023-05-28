import React from "react";
import Header from "../chatwindow/header";
import Personality from "./personality";
import ConversationStyle from "./conversationStyle";
import Strictness from "./strictness";

const Config = () => {
  return (
    <div className="">
      <Header text="Configuration" />
      <div className="px-3">
        <Personality />
        <ConversationStyle />
        <Strictness />
      </div>
    </div>
  );
};

export default Config;
