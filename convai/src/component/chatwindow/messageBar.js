import React, { useEffect, useRef } from "react";
import { emulatorActions } from "../../store/emulatorSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const MessageBar = () => {
  const API_KEY = "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";
  const dispatch = useDispatch();
  const ref = useRef("");
  const data = useSelector((state) => state.emulator);
  useEffect(() => {
    const chatHistory = data.chatHistory;
    if (chatHistory.length > 0) {
      const lastMessageObj = chatHistory[chatHistory.length - 1];
      console.log("Inside ", chatHistory, lastMessageObj, lastMessageObj.by);
      if (lastMessageObj.by == "human") {
        generatePrompt(chatHistory);
      }
    }
  }, [data.chatHistory]);
  const generatePrompt = (chatHistory) => {
    // const chatHistory = data.chatHistory;
    const conversationStyle = data.conversationStyle;
    const personality = data.personality;
    const strictness = data.strictness;
    console.log("Chat history is ", chatHistory, JSON.stringify(chatHistory));
    return `
    You are a chatbot having conversation style of ${conversationStyle} and a conversation personality of a ${personality}. ${
      strictness == 1
        ? "You can deviate from the topic anytime you want"
        : strictness == 2
        ? "You can deviate from the topic frequenty"
        : strictness == 3
        ? "You can deviate from the topic"
        : strictness == 4
        ? "You will stick strictly to the topic within your area of expertise."
        : strictness == 5
        ? "You will only provide answers within your area of expertise, strictly avoiding any deviations from the topic."
        : ""
    }
    This is the conversation till now:
    ${JSON.stringify(chatHistory)}
    Generate the next response based on the conversation history
    `;
  };
  const sendMessage = async () => {
    const message = ref.current.value;
    dispatch(emulatorActions.humanTalked(message));
    ref.current.value = "";

    try {
      // Make the Axios POST request
      const response = await axios.post("http://localhost:5000/completions", {
        prompt,
      });
      console.log("response is ", response);
      const reply = response.data.choices[0].message.content;
      // Dispatch the action with the response data
      dispatch(emulatorActions.botTalked(reply));
    } catch (error) {
      // Handle the error if the request fails
      console.error("Error:", error);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };
  return (
    <div className="flex my-3 min-h-[40px] gap-x-2">
      <input
        type="text"
        placeholder="Type your message..."
        className="w-11/12 rounded-lg px-3 placeholder-gray-400-500 text-gray-700 outline-none"
        ref={ref}
        onKeyPress={handleKeyPress}
      />
      <div
        className="text-gray-200 w-1/12 flex justify-center items-center bg-gradient-to-br from-third to-purple-700 rounded-lg cursor-pointer hover:from-secondary hover:to-third transition-all"
        onClick={() => {
          sendMessage();
        }}
      >
        Send
      </div>
    </div>
  );
};

export default MessageBar;
