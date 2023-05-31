import React, { useState } from "react";
import { emulatorActions } from "../../store/emulatorSlice";
import { useDispatch, useSelector } from "react-redux";

const ConversationStyle = () => {
  const dispatch = useDispatch();
  const conversationStyle = useSelector(
    (state) => state.emulator.conversationStyle
  );
  return (
    <div className="my-4">
      <div className="text-[24px] mb-2">Conversation style</div>
      <div className="flex flex-wrap gap-3 my-1">
        <div
          className={`cursor-pointer hover:scale-[1.05] h-fit bg-gradient-to-br from-gray-200 to-gray-400 text-gray-700 font-medium rounded-xl px-3 py-1 shadow-sm shadow-gray-300 ${
            conversationStyle == "Dramatic" &&
            "from-purple-200 to-purple-400 border-[2px] border-purple-600 shadow-none"
          }`}
          onClick={() => {
            dispatch(emulatorActions.conversationStyleUpdated("Dramatic"));
          }}
        >
          Dramatic
        </div>
        <div
          className={`cursor-pointer hover:scale-[1.05] h-fit bg-gradient-to-br from-gray-200 to-gray-400 text-gray-700 font-medium rounded-xl px-3 py-1 shadow-sm shadow-gray-300 ${
            conversationStyle == "Sarcastic" &&
            "from-purple-200 to-purple-400 border-[2px] border-purple-600 shadow-none"
          }`}
          onClick={() => {
            dispatch(emulatorActions.conversationStyleUpdated("Sarcastic"));
          }}
        >
          Sarcastic
        </div>
        <div
          className={`cursor-pointer hover:scale-[1.05] h-fit bg-gradient-to-br from-gray-200 to-gray-400 text-gray-700 font-medium rounded-xl px-3 py-1 shadow-sm shadow-gray-300 ${
            conversationStyle == "Funny" &&
            "from-purple-200 to-purple-400 border-[2px] border-purple-600 shadow-none"
          }`}
          onClick={() => {
            dispatch(emulatorActions.conversationStyleUpdated("Funny"));
          }}
        >
          Funny
        </div>
        <div
          className={`cursor-pointer hover:scale-[1.05] h-fit bg-gradient-to-br from-gray-200 to-gray-400 text-gray-700 font-medium rounded-xl px-3 py-1 shadow-sm shadow-gray-300 ${
            conversationStyle == "Laconic" &&
            "from-purple-200 to-purple-400 border-[2px] border-purple-600 shadow-none"
          }`}
          onClick={() => {
            dispatch(emulatorActions.conversationStyleUpdated("Laconic"));
          }}
        >
          Laconic
        </div>
        <div
          className={`cursor-pointer hover:scale-[1.05] h-fit bg-gradient-to-br from-gray-200 to-gray-400 text-gray-700 font-medium rounded-xl px-3 py-1 shadow-sm shadow-gray-300 ${
            conversationStyle == "Cowboy" &&
            "from-purple-200 to-purple-400 border-[2px] border-purple-600 shadow-none"
          }`}
          onClick={() => {
            dispatch(emulatorActions.conversationStyleUpdated("Cowboy"));
          }}
        >
          Cowboy
        </div>
        <div
          className={`cursor-pointer hover:scale-[1.05] h-fit bg-gradient-to-br from-gray-200 to-gray-400 text-gray-700 font-medium rounded-xl px-3 py-1 shadow-sm shadow-gray-300 ${
            conversationStyle == "Anime" &&
            "from-purple-200 to-purple-400 border-[2px] border-purple-600 shadow-none"
          }`}
          onClick={() => {
            dispatch(emulatorActions.conversationStyleUpdated("Anime"));
          }}
        >
          Anime
        </div>
      </div>
    </div>
  );
};

export default ConversationStyle;
