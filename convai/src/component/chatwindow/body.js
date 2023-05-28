import React from "react";
import Message from "./message";

const Body = () => {
  return (
    <div className="flex-grow overflow-y-auto">
      <Message by="bot" message="Hello how you doing?" />
      <Message
        by="human"
        message="I'm doing great man this is a very long message. I'm doing great man this is a very long message. I'm doing great man this is a very long message"
      />
      <Message by="bot" message="Hello how you doing?" />
      <Message
        by="human"
        message="I'm doing great man this is a very long message. I'm doing great man this is a very long message. I'm doing great man this is a very long message"
      />
      <Message by="bot" message="Hello how you doing?" />
      <Message by="bot" message="Hello how you doing?" />
      <Message
        by="human"
        message="I'm doing great man this is a very long message. I'm doing great man this is a very long message. I'm doing great man this is a very long message"
      />
    </div>
  );
};

export default Body;
