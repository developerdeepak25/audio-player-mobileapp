import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { playNext, setCurrentTime, setDuration, setIsPlaying } from "../slices/audioSilce/audioSilce";

const Audio = ({ audioSrc }) => {
  // console.log("🚀 ~ file: Audio.js:4 ~ Audio ~ audioSrc:", audioSrc);
  const dispatch = useDispatch()
  const audioRef = useRef()
  const { ispause, currentTime, duration, seekTo } = useSelector((state) => {
    return state.audio;
  });
  // console.log("🚀 ~ file: Audio.js:12 ~ const{ispause,currentTime,duration}=useSelector ~ duration:", duration)
  // console.log("🚀 ~ file: Audio.js:12 ~ const{ispause,currentTime}=useSelector ~ currentTime:", currentTime)
  useEffect(()=>{
    ispause ? audioRef.current.pause() : audioRef.current.play()
  },[ispause])

  useEffect(() => {
    // Add an event listener to track the "play" event
    audioRef.current.addEventListener("play", handlePlay);
    // Add an event listener to track the "pause" event
    audioRef.current.addEventListener("pause", handlePause);

    // Remove the event listeners when the component unmounts
    return () => {
      audioRef.current.removeEventListener("play", handlePlay);
      audioRef.current.removeEventListener("pause", handlePause);
    };
  }, []);

  const handlePlay = () => {
    console.log("play");
    dispatch(setIsPlaying(false));
  };
  const handlePause = () => {
    console.log("pause");
    dispatch(setIsPlaying(true));
  };
  useEffect(() => {
    audioRef.current.addEventListener("timeupdate", handleTimeUpdate);
    audioRef.current.addEventListener("loadedmetadata", handleLoadedMetadata); // Listen for metadata load event
    audioRef.current.addEventListener("ended", handleEnded);
    return () => {
      audioRef.current.removeEventListener("timeupdate", handleTimeUpdate);
      audioRef.current.removeEventListener("loadedmetadata", handleLoadedMetadata);
    };
  },[]);
  useEffect(() => {
    audioRef.current.currentTime =  seekTo
  },[seekTo])
  const handleTimeUpdate = (e) => {
    // console.log(e);
    // console.log(e.target.currentTime);
    dispatch(setCurrentTime(e.target.currentTime))
  };
  const handleLoadedMetadata = (e) => {
    dispatch(setCurrentTime(e.target.currentTime))
    dispatch(setDuration(e.target.duration)); // Set duration when metadata is loaded
  };
  const handleEnded =()=>{
    dispatch(playNext())
  }
  // useEffect(() => {
  //   console.log(audioRef.current.duration);
  //   dispatch(setDuration(audioRef.current.duration));
  // },[dispatch])

  return (
    <div>
      <audio src={audioSrc} autoPlay ref={audioRef} ></audio>
    </div>
  );
};

export default Audio;
