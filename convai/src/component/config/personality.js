import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { emulatorActions } from "../../store/emulatorSlice";

const Personality = () => {
  const dispatch = useDispatch();
  const personality = useSelector((state) => state.emulator.personality);
  return (
    <div className="my-4">
      <div className="text-[24px] mb-2">Bot personality</div>
      <div className="flex flex-wrap gap-3 my-1">
        <div
          className={`cursor-pointer hover:scale-[1.05] h-fit bg-gradient-to-br from-gray-200 to-gray-400 text-gray-700 font-medium rounded-xl px-3 py-1 shadow-sm shadow-gray-300 ${
            personality == "Confident" &&
            "from-purple-200 to-purple-400 border-[2px] border-purple-600 shadow-none"
          }`}
          onClick={() => {
            dispatch(emulatorActions.personalityUpdated("Confident"));
          }}
        >
          Confident
        </div>
        <div
          className={`cursor-pointer hover:scale-[1.05] h-fit bg-gradient-to-br from-gray-200 to-gray-400 text-gray-700 font-medium rounded-xl px-3 py-1 shadow-sm shadow-gray-300 ${
            personality == "Passionate" &&
            "from-purple-200 to-purple-400 border-[2px] border-purple-600 shadow-none"
          }`}
          onClick={() => {
            dispatch(emulatorActions.personalityUpdated("Passionate"));
          }}
        >
          Passionate
        </div>
        <div
          className={`cursor-pointer hover:scale-[1.05] h-fit bg-gradient-to-br from-gray-200 to-gray-400 text-gray-700 font-medium rounded-xl px-3 py-1 shadow-sm shadow-gray-300 ${
            personality == "Calm" &&
            "from-purple-200 to-purple-400 border-[2px] border-purple-600 shadow-none"
          }`}
          onClick={() => {
            dispatch(emulatorActions.personalityUpdated("Calm"));
          }}
        >
          Calm
        </div>
        <div
          className={`cursor-pointer hover:scale-[1.05] h-fit bg-gradient-to-br from-gray-200 to-gray-400 text-gray-700 font-medium rounded-xl px-3 py-1 shadow-sm shadow-gray-300 ${
            personality == "Empathetic" &&
            "from-purple-200 to-purple-400 border-[2px] border-purple-600 shadow-none"
          }`}
          onClick={() => {
            dispatch(emulatorActions.personalityUpdated("Empathetic"));
          }}
        >
          Empathetic
        </div>
        <div
          className={`cursor-pointer hover:scale-[1.05] h-fit bg-gradient-to-br from-gray-200 to-gray-400 text-gray-700 font-medium rounded-xl px-3 py-1 shadow-sm shadow-gray-300 ${
            personality == "Angry" &&
            "from-purple-200 to-purple-400 border-[2px] border-purple-600 shadow-none"
          }`}
          onClick={() => {
            dispatch(emulatorActions.personalityUpdated("Angry"));
          }}
        >
          Angry
        </div>
        <div
          className={`cursor-pointer hover:scale-[1.05] h-fit bg-gradient-to-br from-gray-200 to-gray-400 text-gray-700 font-medium rounded-xl px-3 py-1 shadow-sm shadow-gray-300 ${
            personality == "Impatient" &&
            "from-purple-200 to-purple-400 border-[2px] border-purple-600 shadow-none"
          }`}
          onClick={() => {
            dispatch(emulatorActions.personalityUpdated("Impatient"));
          }}
        >
          Impatient
        </div>
      </div>
    </div>
  );
};

export default Personality;
