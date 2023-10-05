import React, { useState } from "react";
import "./Playlist.scss";
import { useDispatch, useSelector } from "react-redux";
import { Pause, Play } from "../svg-icon/Svg";
import { setIndex, setIsPlaying } from "../slices/audioSilce/audioSilce";

const Playlist = ({ data }) => {
  const { ispause,index } = useSelector((state) => {
    return state.audio;
  });
  const dispatch = useDispatch()

  const [firstClick, setFirstClick] = useState(true);
  const [saveIndex, setSaveIndex] = useState(null)

  const handlePlayIndex = (i) => {
    console.log(saveIndex !== i);
    if( saveIndex !==i){
      dispatch(setIndex(i));
      dispatch(setIsPlaying(firstClick ? false : !ispause));
      // setFirstClick(false); // Set firstClick to false after the first click
      setSaveIndex(i)
      
    }else{
      dispatch(setIsPlaying(!ispause))
      setFirstClick(true)
    }
  };
  return (
    <div className="playlist-container layout">
      {/* <div className="playlist-wrapper"> */}

      <div className="playlist">

        {data.map((item,i) => {
          return (
            <div key={i} className={`playlist-item ${index === i ? "active" : ""}` } onClick={()=>{handlePlayIndex(i)}}>
              <div className="item-data">
                <div className="item-img">
                  <img src={item.img} alt={item.description} />
                </div>
                <div className="item-desc">
                  <div className="item-title">{item.title}</div>
                  <div className="item-credit">{item.credit}</div>
                </div>
              </div>
              <div className="item-play-btn">
                {index === i && !ispause ? <Pause /> : <Play color={ispause && index ===i? "#e9e9e9":"#161616"} />}
              </div>
            </div>
          );
        })}
      {/* </div> */}
    </div>
        <div className="extra" ></div>
      </div>
  );
};

export default Playlist;
