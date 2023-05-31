import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const emulatorSlice = createSlice({
  name: "setup",
  initialState: {
    chatHistory: [],
    conversationStyle: "Dramatic",
    personality: "Confident",
    strictness: 1,
  },
  reducers: {
    botTalked(state, action) {
      state.chatHistory.push({ role: "bot", content: action.payload });
    },
    humanTalked(state, action) {
      state.chatHistory.push({ role: "human", content: action.payload });
    },
    conversationStyleUpdated(state, action) {
      state.conversationStyle = action.payload;
    },
    personalityUpdated(state, action) {
      state.personality = action.payload;
    },
    strictnessUpdated(state, action) {
      state.strictness = action.payload;
    },
  },
});

export const emulatorActions = emulatorSlice.actions;

export default emulatorSlice;
