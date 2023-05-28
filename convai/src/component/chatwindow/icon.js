import React from "react";

const Icon = (props) => {
  return (
    <>
      {props.by === "human" && (
        <div className="bg-gradient-to-br from-teal-300 to-teal-500 w-[40px] h-[40px] rounded-full shadow-md shadow-gray-500"></div>
      )}
      {props.by === "bot" && (
        <div className="bg-gradient-to-br from-purple-300 to-purple-500 w-[40px] h-[40px] rounded-full shadow-md shadow-purple-500"></div>
      )}
    </>
  );
};

export default Icon;
