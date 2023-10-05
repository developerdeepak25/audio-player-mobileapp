import { createSlice } from "@reduxjs/toolkit";
import dataArray from "../../data";

const audioSilce = createSlice({
  name: "audio",
  initialState: {
    index: 0,
    length: dataArray.length,
    ispause: true,
    currentTime: 0,
    duration: 0,
    seekTo: 0,
  },
  reducers: {
    playNext(state) {
      if (state.index < state.length - 1) {
        state.index++;
      } else {
        state.index = 0;
      }
    },
    playPrev(state) {
      if (state.index > 0) {
        state.index--;
      } else {
        state.index = dataArray.length - 1;
      }
      // state.index = state.index - 1;
    },
    setIndex(state,action) {            // using to play a audio at perticular index
      state.index = action.payload
    },
    setIsPlaying(state, action) {
      state.ispause = action.payload;
    },
    setCurrentTime(state, action) {
      state.currentTime = action.payload;
    },
    setDuration(state, action) {
      state.duration = action.payload;
    },
    setSeekTo(state, action) {
      state.seekTo = action.payload;
    },

  },
});

export default audioSilce.reducer;

export const { playNext, playPrev,setIndex, setIsPlaying, setCurrentTime, setDuration,setSeekTo } =
  audioSilce.actions;
