import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { emulatorActions } from "../../store/emulatorSlice";

const Strictness = () => {
  const dispatch = useDispatch();
  const value = useSelector((state) => state.emulator.strictness);

  const handleChange = (event) => {
    dispatch(emulatorActions.strictnessUpdated(Number(event.target.value)));
  };

  const getValueLabel = () => {
    switch (value) {
      case 1:
        return "Very Low";
      case 2:
        return "Low";
      case 3:
        return "Medium";
      case 4:
        return "High";
      case 5:
        return "Very High";
      default:
        return "";
    }
  };

  return (
    <>
      <div className="">
        <div className="text-[24px] mb-2">Bot strictness</div>
      </div>
      <div className="flex items-center">
        <span className="mr-2">1</span>
        <input
          type="range"
          min="1"
          max="5"
          value={value}
          onChange={handleChange}
          className="flex-grow-[1] cursor-pointer w-64 h-4 bg-gradient-to-r from-purple-200 to-purple-300 appearance-none rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <span className="ml-2">5</span>
        <div className="ml-4 w-[90px]">{getValueLabel()}</div>
      </div>
    </>
  );
};

export default Strictness;
