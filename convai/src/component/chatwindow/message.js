import React from "react";
import Icon from "./icon";
import MessageBubble from "./messageBubble";

const Message = (props) => {
  return (
    <>
      {props.by === "bot" && (
        <>
          <div className="flex my-3 ml-4 gap-x-4 justify-start">
            <Icon by={props.by} />
            <MessageBubble message={props.message} by={props.by} />
          </div>
        </>
      )}
      {props.by === "human" && (
        <>
          <div className="flex my-3 mr-4 gap-x-4 justify-end">
            <MessageBubble message={props.message} by={props.by} />
            <Icon by={props.by} />
          </div>
        </>
      )}
    </>
  );
};

export default Message;
