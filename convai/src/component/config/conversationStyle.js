import React, { useState } from "react";

const ConversationStyle = () => {
  const [active, setActive] = useState("");
  return (
    <div className="my-4">
      <div className="text-[24px] mb-2">Conversation style</div>
      <div className="flex flex-wrap gap-3 my-1">
        <div
          className={`cursor-pointer hover:scale-[1.05] h-fit bg-gradient-to-br from-gray-200 to-gray-400 text-gray-700 font-medium rounded-xl px-3 py-1 shadow-sm shadow-gray-300 ${
            active == "Dramatic" &&
            "from-purple-200 to-purple-400 border-[2px] border-purple-600 shadow-none"
          }`}
          onClick={() => {
            setActive("Dramatic");
          }}
        >
          Dramatic
        </div>
        <div
          className={`cursor-pointer hover:scale-[1.05] h-fit bg-gradient-to-br from-gray-200 to-gray-400 text-gray-700 font-medium rounded-xl px-3 py-1 shadow-sm shadow-gray-300 ${
            active == "Sarcastic" &&
            "from-purple-200 to-purple-400 border-[2px] border-purple-600 shadow-none"
          }`}
          onClick={() => {
            setActive("Sarcastic");
          }}
        >
          Sarcastic
        </div>
        <div
          className={`cursor-pointer hover:scale-[1.05] h-fit bg-gradient-to-br from-gray-200 to-gray-400 text-gray-700 font-medium rounded-xl px-3 py-1 shadow-sm shadow-gray-300 ${
            active == "Funny" &&
            "from-purple-200 to-purple-400 border-[2px] border-purple-600 shadow-none"
          }`}
          onClick={() => {
            setActive("Funny");
          }}
        >
          Funny
        </div>
        <div
          className={`cursor-pointer hover:scale-[1.05] h-fit bg-gradient-to-br from-gray-200 to-gray-400 text-gray-700 font-medium rounded-xl px-3 py-1 shadow-sm shadow-gray-300 ${
            active == "Laconic" &&
            "from-purple-200 to-purple-400 border-[2px] border-purple-600 shadow-none"
          }`}
          onClick={() => {
            setActive("Laconic");
          }}
        >
          Laconic
        </div>
        <div
          className={`cursor-pointer hover:scale-[1.05] h-fit bg-gradient-to-br from-gray-200 to-gray-400 text-gray-700 font-medium rounded-xl px-3 py-1 shadow-sm shadow-gray-300 ${
            active == "Cowboy" &&
            "from-purple-200 to-purple-400 border-[2px] border-purple-600 shadow-none"
          }`}
          onClick={() => {
            setActive("Cowboy");
          }}
        >
          Cowboy
        </div>
        <div
          className={`cursor-pointer hover:scale-[1.05] h-fit bg-gradient-to-br from-gray-200 to-gray-400 text-gray-700 font-medium rounded-xl px-3 py-1 shadow-sm shadow-gray-300 ${
            active == "Anime" &&
            "from-purple-200 to-purple-400 border-[2px] border-purple-600 shadow-none"
          }`}
          onClick={() => {
            setActive("Anime");
          }}
        >
          Anime
        </div>
      </div>
    </div>
  );
};

export default ConversationStyle;
