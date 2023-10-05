import React from "react";

const Timer = ({ seconds }) => {
    // console.log(seconds);
  const minutes = String(Math.floor(seconds / 60)).padStart(2,"0");
  const remainingSeconds = Math.floor(seconds % 60);
  seconds = String(remainingSeconds).padStart(2, "0");
  //  const formatedSeconds =Math.floor(seconds)
  return (
    <div>
      {minutes} : {seconds}
    </div>
  );
};

export default Timer;
