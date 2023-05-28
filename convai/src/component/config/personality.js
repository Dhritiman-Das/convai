import React, { useState } from "react";

const Personality = () => {
  const [active, setActive] = useState("");
  return (
    <div className="my-4">
      <div className="text-[24px] mb-2">Bot personality</div>
      <div className="flex flex-wrap gap-3 my-1">
        <div
          className={`cursor-pointer hover:scale-[1.05] h-fit bg-gradient-to-br from-gray-200 to-gray-400 text-gray-700 font-medium rounded-xl px-3 py-1 shadow-sm shadow-gray-300 ${
            active == "Confident" &&
            "from-purple-200 to-purple-400 border-[2px] border-purple-600 shadow-none"
          }`}
          onClick={() => {
            setActive("Confident");
          }}
        >
          Confident
        </div>
        <div
          className={`cursor-pointer hover:scale-[1.05] h-fit bg-gradient-to-br from-gray-200 to-gray-400 text-gray-700 font-medium rounded-xl px-3 py-1 shadow-sm shadow-gray-300 ${
            active == "Passionate" &&
            "from-purple-200 to-purple-400 border-[2px] border-purple-600 shadow-none"
          }`}
          onClick={() => {
            setActive("Passionate");
          }}
        >
          Passionate
        </div>
        <div
          className={`cursor-pointer hover:scale-[1.05] h-fit bg-gradient-to-br from-gray-200 to-gray-400 text-gray-700 font-medium rounded-xl px-3 py-1 shadow-sm shadow-gray-300 ${
            active == "Calm" &&
            "from-purple-200 to-purple-400 border-[2px] border-purple-600 shadow-none"
          }`}
          onClick={() => {
            setActive("Calm");
          }}
        >
          Calm
        </div>
        <div
          className={`cursor-pointer hover:scale-[1.05] h-fit bg-gradient-to-br from-gray-200 to-gray-400 text-gray-700 font-medium rounded-xl px-3 py-1 shadow-sm shadow-gray-300 ${
            active == "Empathetic" &&
            "from-purple-200 to-purple-400 border-[2px] border-purple-600 shadow-none"
          }`}
          onClick={() => {
            setActive("Empathetic");
          }}
        >
          Empathetic
        </div>
        <div
          className={`cursor-pointer hover:scale-[1.05] h-fit bg-gradient-to-br from-gray-200 to-gray-400 text-gray-700 font-medium rounded-xl px-3 py-1 shadow-sm shadow-gray-300 ${
            active == "Angry" &&
            "from-purple-200 to-purple-400 border-[2px] border-purple-600 shadow-none"
          }`}
          onClick={() => {
            setActive("Angry");
          }}
        >
          Angry
        </div>
        <div
          className={`cursor-pointer hover:scale-[1.05] h-fit bg-gradient-to-br from-gray-200 to-gray-400 text-gray-700 font-medium rounded-xl px-3 py-1 shadow-sm shadow-gray-300 ${
            active == "Impatient" &&
            "from-purple-200 to-purple-400 border-[2px] border-purple-600 shadow-none"
          }`}
          onClick={() => {
            setActive("Impatient");
          }}
        >
          Impatient
        </div>
      </div>
    </div>
  );
};

export default Personality;
