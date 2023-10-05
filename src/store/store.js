import { configureStore } from "@reduxjs/toolkit";
import audioSilce from "../slices/audioSilce/audioSilce";

const store = configureStore({
  reducer: {
    audio: audioSilce,
  },
});

export default store;
