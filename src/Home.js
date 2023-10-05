import React from "react";
import dataArray from "./data";
import './home.scss'
import Header from "./components/Header";
import Controls from "./components/Controls";
import { useSelector } from "react-redux";
import Audio from "./components/Audio";
import Playlist from "./components/Playlist";

const Home = () => {
  // const c = dataArray[0].audio;
  // console.log(c);
  const {index} = useSelector((state)=>{
    return state.audio
  })
  // console.log(index);
  // const index = audioState.index
  return (
    <div className="container">
      {/* <div className="layout"> */}
        <Header data={dataArray[index]} />
        <Playlist data={dataArray}/>
        <Audio audioSrc={dataArray[index].audio}  />
        <Controls/>
      {/* </div> */}
    </div>
  );
};

export default Home;
