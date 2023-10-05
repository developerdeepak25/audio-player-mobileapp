import React, { useEffect, useState } from "react";
import "./Controls.scss";
import { useDispatch } from "react-redux";
import {
  playPrev,
  setCurrentTime,
  setIsPlaying,
  setSeekTo,
  
} from "../slices/audioSilce/audioSilce";
import { playNext } from "../slices/audioSilce/audioSilce";
import { useSelector } from "react-redux";
import Timer from "./Timer";
import { LeftPlay, Pause, Play, RightPlay } from "../svg-icon/Svg";

const Controls = () => {
  const { ispause, index, currentTime, duration,seekTo } = useSelector((state) => {
    return state.audio;
  });
  // console.log(currentTime);
  const dispatch = useDispatch();
  // const [localCurrentTime, setLocalCurrentTime] = useState(currentTime);

  const playBack = () => {
    console.log(index);
    dispatch(playPrev());
  };
  const playForward = () => {
    console.log(index);
    dispatch(playNext());
  };
  const playPause = () => {
    console.log(index, ispause);
    dispatch(setIsPlaying(!ispause));
  };

  // useEffect(()=>{

  // })
  const handleRangeChange = (e) => {
    // setLocalCurrentTime(parseFloat(e.target.value));
    dispatch(setSeekTo(parseFloat(e.target.value)));
      // console.log(duration);
      console.log("seek", seekTo);
    };
    
  //   const handleRangeRelease = () => {
  //   dispatch(setCurrentTime(localCurrentTime));
  // };
 
 

  return (
    <div className="controller">
      <div className="timeline layout">
        <div className="progressbar">
          <input
            id="time-range"
            type="range"
            name="range"
            value={currentTime}
            min={0}
            max={duration || 0}
            onChange={handleRangeChange}
            // onMouseUp={handleRangeRelease}
          />
        </div>
        <div className="duration">
          <div className="current-duration inner-dur">
            <Timer seconds={currentTime}></Timer>
          </div>
          <div className="total-duration inner-dur">
            <Timer seconds={duration}></Timer>
          </div>
        </div>
      </div>
      <div className="audio-controls">
        <div className="left control-btn" onClick={() => playBack()}>
          <LeftPlay />
        </div>
        <div className="play-btn control-btn" onClick={() => playPause()}>
          {ispause ? <Play /> : <Pause />}
        </div>
        <div className="right control-btn" onClick={() => playForward()}>
          <RightPlay />
        </div>
      </div>
    </div>
  );
};



export default Controls;
