// import React, { useEffect, useRef, useState } from "react";
// import src1 from "./music-files/Suzume no Tojimari OST.mp3";
// import src2 from "./music-files/Ver  Ai Higuchi Akuma no Ko Anime Special Ver.mp3";
// import src3 from "./music-files/Violet Evergarden outro.mp3";
// import "./App.css";

// const Logic = () => {
//   // const obj = {
//   //   src: src1,
//   // };
//   const [isPlaying, setIsPlaying] = useState(false);
//   const [isMute, setIsMute] = useState(false);
//   const audioRef = useRef();
//   const progressWrap = useRef();
//   const [volume, setVolume] = useState(1); // Default to full volume
//   const [src, setSrc] = useState(src1);
//   const [currentTime, setCurrentTime] = useState(0);
//   const [duration, setDuration] = useState(0);
//   // const [isDragging, setIsDragging] = useState(false);

//   const updateProgressBar = () => {
//     const currentTime = audioRef.current.currentTime;
//     const duration = audioRef.current.duration;
//     setCurrentTime(currentTime);
//     setDuration(duration);

//   };
//   // const width = currentTime/duration * 100
//   const progressBarWidth = (currentTime / duration) * 100 + "%";

//   useEffect(() => {
//     audioRef.current.addEventListener("timeupdate", updateProgressBar);
//     return () => {
//       audioRef.current.removeEventListener("timeupdate", updateProgressBar);
//     };
//   }, []);

//   const seekTo =(e)=>{
//     const clickX = parseFloat(e.nativeEvent.offsetX);
//     const wrapperWidth = parseFloat( progressWrap.current.clientWidth);

//     audioRef.current.currentTime = (clickX/wrapperWidth) * duration
//     console.log(wrapperWidth);
//   }

//   const togglePlayback = () => {
//     setIsPlaying(!isPlaying);
//     // const audioElement = document.getElementById("audio-element");

//     if (isPlaying) {
//       audioRef.current.pause();
//     } else {
//       audioRef.current.play();
//     }
//   };
//   const toggleMute = () => {
//     setIsMute(!isMute);
//     // const audioElement = document.getElementById("audio-element");
//     // const newState = !isMute;

//     audioRef.current.muted = !isMute;

//   };
//   const handleVolumeChange = (event) => {
//     const newVolume = parseFloat(event.target.value);
//     setVolume(newVolume);
//     audioRef.current.volume = newVolume;
//     //  console.log("🚀 ~ file: App.js:32 ~ handleVolumeChange ~ audioRef.current.volume:", audioRef.current.volume)
//   };
//   const changeMusic = () => {
//     console.log("🚀 ~ file: App.js:39 ~ changeMusic ~ audioRef:", audioRef);
//     if (src === src1) {
//       setSrc(src2);
//     } else if (src === src2) {
//       setSrc(src3);
//     } else if (src === src3) {
//       setSrc(src1);
//     }
//   };

//   useEffect(() => {

//     console.log(audioRef.current.duration);
//     console.log(audioRef);
//   }, []);
//    useEffect(() => {
//     //  audioRef.current.autoplay = true;

//      // Add an event listener for the 'ended' event
//      audioRef.current.addEventListener("ended", () => {
//        // Call the changeMusic function when the music ends
//        changeMusic();
//      });

//      // Cleanup: Remove the event listener when the component unmounts
//      return () => {
//        audioRef.current.removeEventListener("ended", () => {
//          changeMusic();
//        });
//      };
//    }, [changeMusic]);
//   return (
//     <div>
//       <audio controls ref={audioRef} id="audio-element" src={src} autoPlay>
//         {/* <source src={src1} type="audio/mpeg" /> */}
//       </audio>

//       <button onClick={togglePlayback}>{isPlaying ? "Pause" : "Play"}</button>
//       <button onClick={toggleMute}>{isMute ? "unmute" : "mute"}</button>
//       <button onClick={changeMusic}>next</button>
//       <div>
//         <label htmlFor="volume">Volume:</label>
//         <input
//           type="range"
//           id="volume"
//           name="volume"
//           min="0"
//           max="1"
//           step="0.01"
//           value={volume}
//           onChange={handleVolumeChange}
//         />
//       </div>
//       <div className="progress-bar" onClick={seekTo} ref={progressWrap}>
//         <div
//           className="progress-bar-fill"
//           style={{ width: progressBarWidth || "0%" }}
//         ></div>
//       </div>
//     </div>
//   );
// };

// export default Logic;

import React, { useEffect, useRef, useState } from "react";
import src1 from "./music-files/Suzume no Tojimari OST.mp3";
import src2 from "./music-files/Ver  Ai Higuchi Akuma no Ko Anime Special Ver.mp3";
import src3 from "./music-files/Violet Evergarden outro.mp3";
import "./App.css";

const Logic = () => {
  const audioRef = useRef();
  const progressWrap = useRef();
  const [volume, setVolume] = useState(1); // Default to full volume
  const [src, setSrc] = useState(src1);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMute, setIsMute] = useState(false);

  const progressBarWidth = `${Math.round((currentTime / duration) * 100)}%`;
  // console.log(progressBarWidth);

  const updateProgressBar = () => {
    setCurrentTime(audioRef.current.currentTime);
    setDuration(audioRef.current.duration);
  };

  const seekTo = (e) => {
    // const rect = progressWrap.current.getBoundingClientRect()
    // const left =  e.clientX
    // const clickX = left- rect.left
    // const wrapperWidth = progressWrap.current.clientWidth;
    // audioRef.current.currentTime = Math.round(
    //   (clickX / wrapperWidth) * duration
    // );
    // console.log(audioRef.current.currentTime);

    const rect = progressWrap.current.getBoundingClientRect();
    const left = e.clientX || e.touches[0].clientX; // Use e.touches for touch events
    const clickX = left - rect.left;
    const wrapperWidth = progressWrap.current.clientWidth;

    // Ensure clickX is within the valid range
    if (clickX >= 0 && clickX <= wrapperWidth) {
      audioRef.current.currentTime = Math.round(
        (clickX / wrapperWidth) * duration
      );
    //   console.log(audioRef.current.currentTime);
    }
  };

  const togglePlayback = () => {
    setIsPlaying((prev) => {
      prev ? audioRef.current.pause() : audioRef.current.play();
      return !prev;
    });
  };

  const toggleMute = () => {
    setIsMute(!isMute);
    audioRef.current.muted = !isMute;
  };

  const changeMusic = () => {
    setIsPlaying(true);

    if (src === src1) setSrc(src2);
    else if (src === src2) setSrc(src3);
    else if (src === src3) setSrc(src1);
  };

  useEffect(() => {
    audioRef.current.addEventListener("timeupdate", updateProgressBar);
    audioRef.current.addEventListener("ended", changeMusic);

    return () => {
      audioRef.current.removeEventListener("timeupdate", updateProgressBar);
      audioRef.current.removeEventListener("ended", changeMusic);
    };
  }, [changeMusic]);

  // useEffect(() => {
  //   if (isPlaying) audioRef.current.play();
  //   else audioRef.current.pause();
  // }, [isPlaying]);

  useEffect(() => {
    audioRef.current.volume = volume;
  }, [volume]);

  const [isDragging, setIsDragging] = useState();

  const handleProgressBarDragStart = () => {
    setIsDragging(true);
  };

  const handleProgressBarDragEnd = () => {
    setIsDragging(false);
  };

  const handleProgressBarMouseMove = (e) => {
    if (isDragging) {
      seekTo(e);
    }
  };
  const handleRemoveMouseMove = () => {
    setIsDragging(false);
  };

  const handleProgressBarTouchStart = (e) => {
    setIsDragging(true);
    handleProgressBarMouseMove(e);
  };

  const handleProgressBarTouchEnd = () => {
    setIsDragging(false);
  };

  const handleProgressBarTouchMove = (e) => {
    if (isDragging) {
      seekTo(e); // Use the first touch point
    }
  };

  return (
    <div>
      <audio controls ref={audioRef} id="audio-element" src={src} autoPlay>
        {/* <source src={src1} type="audio/mpeg" /> */}
      </audio>

      <button onClick={togglePlayback}>{isPlaying ? "Pause" : "Play"}</button>
      <button onClick={toggleMute}>{isMute ? "Unmute" : "Mute"}</button>
      <button onClick={changeMusic}>Next</button>
      <div>
        <label htmlFor="volume">Volume:</label>
        <input
          type="range"
          id="volume"
          name="volume"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => setVolume(e.target.value)}
        />
      </div>
      <div
        className="progress-bar"
        onClick={seekTo}
        onMouseDown={handleProgressBarDragStart}
        onMouseUp={handleProgressBarDragEnd}
        onMouseMove={handleProgressBarMouseMove}
        onMouseLeave={handleRemoveMouseMove}
        onTouchStart={handleProgressBarTouchStart}
        onTouchEnd={handleProgressBarTouchEnd}
        onTouchMove={handleProgressBarTouchMove}
        ref={progressWrap}
      >
        <div
          className="progress-bar-fill"
          style={{ width: progressBarWidth || "0%" }}
        ></div>
      </div>
    </div>
  );
};

export default Logic;
