import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchQuiz = createAsyncThunk("quiz/fetchQuiz", async () => {
  const response = await axios.get("/api"); // Use proxy
  return response.data;
});


const quizSlice = createSlice({
  name: "quiz",
  initialState: {
    questions: [],
    currentQuestion: 0,
    score: 0,
    status: "idle",
  },
  reducers: {
    nextQuestion: (state) => {
      state.currentQuestion += 1;
    },
    updateScore: (state, action) => {
      state.score += action.payload;
    },
    restartQuiz: (state) => {
      state.currentQuestion = 0;
      state.score = 0;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchQuiz.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchQuiz.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.questions = action.payload.questions;
      })
      .addCase(fetchQuiz.rejected, (state) => {
        state.status = "failed";
      });
  },
});

export const { nextQuestion, updateScore, restartQuiz } = quizSlice.actions;
export default quizSlice.reducer;
