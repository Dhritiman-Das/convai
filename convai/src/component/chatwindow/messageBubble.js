import React from "react";

const MessageBubble = (props) => {
  return (
    <>
      <div
        className={`min-h-[45px] max-w-[500px] flex items-center px-5 py-3 bg-gradient-to-br ${
          props.by == "bot" &&
          "text-gray-200 from-purple-800 to-purple-900 shadow-sm shadow-gray-600 rounded-2xl"
        } ${
          props.by == "human" &&
          "text-gray-200 from-teal-500 to-teal-700 shadow-sm shadow-purple-600 rounded-2xl"
        } `}
      >
        {props.message}
      </div>
    </>
  );
};

export default MessageBubble;
