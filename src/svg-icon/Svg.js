import React from 'react'

const Hanburger = () => {
  return (
    <svg
      width="44"
      height="18"
      viewBox="0 0 44 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 1.5H41.9996"
        stroke="#E9E9E9"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <path
        d="M16.4226 16.5H42"
        stroke="#E9E9E9"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}


const Play = ({ color = "#E9E9E9" }) => {
  return (
    <>
      {/* <svg width="23" height="25" viewBox="0 0 23 25" fill="none">
        <path
          d="M21.2852 10.4833L4.09766 0.322165C2.70117 -0.50303 0.5625 0.297751 0.5625 2.33877V22.6562C0.5625 24.4872 2.5498 25.5907 4.09766 24.6728L21.2852 14.5165C22.8184 13.6132 22.8232 11.3866 21.2852 10.4833Z"
          fill="#E9E9E9"
        />
      </svg> */}
      <svg
        // width="14"
        // height="16"
        viewBox="0 0 14 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M13.262 6.7081L2.26241 0.20524C1.36869 -0.322864 0 0.189616 0 1.49581V14.4984C0 15.6702 1.27182 16.3765 2.26241 15.789L13.262 9.28925C14.2432 8.71115 14.2463 7.2862 13.262 6.7081Z"
          
          fill={color}
        />
      </svg>
    </>
  );
};

const Pause = () => {
  return (
    <>
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path
          d="M5.14286 16H1.71429C0.767857 16 0 15.2321 0 14.2857V1.71429C0 0.767857 0.767857 0 1.71429 0H5.14286C6.08929 0 6.85714 0.767857 6.85714 1.71429V14.2857C6.85714 15.2321 6.08929 16 5.14286 16ZM16 14.2857V1.71429C16 0.767857 15.2321 0 14.2857 0H10.8571C9.91072 0 9.14286 0.767857 9.14286 1.71429V14.2857C9.14286 15.2321 9.91072 16 10.8571 16H14.2857C15.2321 16 16 15.2321 16 14.2857Z"
          fill="#E9E9E9"
        />
      </svg>
    </>
  );
};

const LeftPlay = () => {
  return (
    <>
      <svg width="24" height="21" viewBox="0 0 24 21" fill="none">
        <path
          d="M24 17.1658L24 3.83284C24 1.10218 21.0325 -0.611445 18.6641 0.753885L12.8823 4.08362L7.10058 7.42728C4.73215 8.79261 4.73215 12.2059 7.10058 13.5713L12.8823 16.915L18.6641 20.2447C21.0325 21.61 24 19.9103 24 17.1658Z"
          fill="#E9E9E9"
        />
        <path
          d="M24 17.1658L24 3.83284C24 1.10218 21.0325 -0.611445 18.6641 0.753885L12.8823 4.08362L7.10058 7.42728C4.73215 8.79261 4.73215 12.2059 7.10058 13.5713L12.8823 16.915L18.6641 20.2447C21.0325 21.61 24 19.9103 24 17.1658Z"
          fill="#E9E9E9"
        />
        <path
          d="M24 17.1658L24 3.83284C24 1.10218 21.0325 -0.611445 18.6641 0.753885L12.8823 4.08362L7.10058 7.42728C4.73215 8.79261 4.73215 12.2059 7.10058 13.5713L12.8823 16.915L18.6641 20.2447C21.0325 21.61 24 19.9103 24 17.1658Z"
          fill="#E9E9E9"
        />
        <path
          d="M24 17.1658L24 3.83284C24 1.10218 21.0325 -0.611445 18.6641 0.753885L12.8823 4.08362L7.10058 7.42728C4.73215 8.79261 4.73215 12.2059 7.10058 13.5713L12.8823 16.915L18.6641 20.2447C21.0325 21.61 24 19.9103 24 17.1658Z"
          fill="#E9E9E9"
        />
        <path
          d="M24 17.1658L24 3.83284C24 1.10218 21.0325 -0.611445 18.6641 0.753885L12.8823 4.08362L7.10058 7.42728C4.73215 8.79261 4.73215 12.2059 7.10058 13.5713L12.8823 16.915L18.6641 20.2447C21.0325 21.61 24 19.9103 24 17.1658Z"
          fill="#E9E9E9"
        />
        <path
          d="M24 17.1658L24 3.83284C24 1.10218 21.0325 -0.611445 18.6641 0.753885L12.8823 4.08362L7.10058 7.42728C4.73215 8.79261 4.73215 12.2059 7.10058 13.5713L12.8823 16.915L18.6641 20.2447C21.0325 21.61 24 19.9103 24 17.1658Z"
          fill="#E9E9E9"
        />
        <path
          d="M24 17.1658L24 3.83284C24 1.10218 21.0325 -0.611445 18.6641 0.753885L12.8823 4.08362L7.10058 7.42728C4.73215 8.79261 4.73215 12.2059 7.10058 13.5713L12.8823 16.915L18.6641 20.2447C21.0325 21.61 24 19.9103 24 17.1658Z"
          fill="#E9E9E9"
        />
        <path
          d="M24 17.1658L24 3.83284C24 1.10218 21.0325 -0.611445 18.6641 0.753885L12.8823 4.08362L7.10058 7.42728C4.73215 8.79261 4.73215 12.2059 7.10058 13.5713L12.8823 16.915L18.6641 20.2447C21.0325 21.61 24 19.9103 24 17.1658Z"
          fill="#E9E9E9"
        />
        <path
          d="M24 17.1658L24 3.83284C24 1.10218 21.0325 -0.611445 18.6641 0.753885L12.8823 4.08362L7.10058 7.42728C4.73215 8.79261 4.73215 12.2059 7.10058 13.5713L12.8823 16.915L18.6641 20.2447C21.0325 21.61 24 19.9103 24 17.1658Z"
          fill="#E9E9E9"
        />
        <path
          d="M1.04495 0.850498C1.61616 0.850498 2.08985 1.32418 2.08985 1.89539L2.08984 19.1153C2.08984 19.6865 1.61616 20.1602 1.04495 20.1602C0.473738 20.1602 5.23147e-05 19.6865 5.23646e-05 19.1153L5.387e-05 1.89539C5.392e-05 1.32418 0.459808 0.850498 1.04495 0.850498Z"
          fill="#E9E9E9"
        />
        <path
          d="M1.04495 0.850498C1.61616 0.850498 2.08985 1.32418 2.08985 1.89539L2.08984 19.1153C2.08984 19.6865 1.61616 20.1602 1.04495 20.1602C0.473738 20.1602 5.23147e-05 19.6865 5.23646e-05 19.1153L5.387e-05 1.89539C5.392e-05 1.32418 0.459808 0.850498 1.04495 0.850498Z"
          fill="#E9E9E9"
        />
        <path
          d="M1.04495 0.850498C1.61616 0.850498 2.08985 1.32418 2.08985 1.89539L2.08984 19.1153C2.08984 19.6865 1.61616 20.1602 1.04495 20.1602C0.473738 20.1602 5.23147e-05 19.6865 5.23646e-05 19.1153L5.387e-05 1.89539C5.392e-05 1.32418 0.459808 0.850498 1.04495 0.850498Z"
          fill="#E9E9E9"
        />
        <path
          d="M1.04495 0.850498C1.61616 0.850498 2.08985 1.32418 2.08985 1.89539L2.08984 19.1153C2.08984 19.6865 1.61616 20.1602 1.04495 20.1602C0.473738 20.1602 5.23147e-05 19.6865 5.23646e-05 19.1153L5.387e-05 1.89539C5.392e-05 1.32418 0.459808 0.850498 1.04495 0.850498Z"
          fill="#E9E9E9"
        />
        <path
          d="M1.04495 0.850498C1.61616 0.850498 2.08985 1.32418 2.08985 1.89539L2.08984 19.1153C2.08984 19.6865 1.61616 20.1602 1.04495 20.1602C0.473738 20.1602 5.23147e-05 19.6865 5.23646e-05 19.1153L5.387e-05 1.89539C5.392e-05 1.32418 0.459808 0.850498 1.04495 0.850498Z"
          fill="#E9E9E9"
        />
        <path
          d="M1.04495 0.850498C1.61616 0.850498 2.08985 1.32418 2.08985 1.89539L2.08984 19.1153C2.08984 19.6865 1.61616 20.1602 1.04495 20.1602C0.473738 20.1602 5.23147e-05 19.6865 5.23646e-05 19.1153L5.387e-05 1.89539C5.392e-05 1.32418 0.459808 0.850498 1.04495 0.850498Z"
          fill="#E9E9E9"
        />
        <path
          d="M1.04495 0.850498C1.61616 0.850498 2.08985 1.32418 2.08985 1.89539L2.08984 19.1153C2.08984 19.6865 1.61616 20.1602 1.04495 20.1602C0.473738 20.1602 5.23147e-05 19.6865 5.23646e-05 19.1153L5.387e-05 1.89539C5.392e-05 1.32418 0.459808 0.850498 1.04495 0.850498Z"
          fill="#E9E9E9"
        />
        <path
          d="M1.04495 0.850498C1.61616 0.850498 2.08985 1.32418 2.08985 1.89539L2.08984 19.1153C2.08984 19.6865 1.61616 20.1602 1.04495 20.1602C0.473738 20.1602 5.23147e-05 19.6865 5.23646e-05 19.1153L5.387e-05 1.89539C5.392e-05 1.32418 0.459808 0.850498 1.04495 0.850498Z"
          fill="#E9E9E9"
        />
        <path
          d="M1.04495 0.850498C1.61616 0.850498 2.08985 1.32418 2.08985 1.89539L2.08984 19.1153C2.08984 19.6865 1.61616 20.1602 1.04495 20.1602C0.473738 20.1602 5.23147e-05 19.6865 5.23646e-05 19.1153L5.387e-05 1.89539C5.392e-05 1.32418 0.459808 0.850498 1.04495 0.850498Z"
          fill="#E9E9E9"
        />
      </svg>
    </>
  );
};

const RightPlay = () => {
  return (
    <>
      <svg width="24" height="21" viewBox="0 0 24 21" fill="none">
        <path
          d="M0 3.83424V17.1672C0 19.8978 2.9675 21.6114 5.33593 20.2461L11.1177 16.9164L16.8994 13.5727C19.2679 12.2074 19.2679 8.79406 16.8994 7.42869L11.1177 4.08502L5.33593 0.755285C2.9675 -0.610045 0 1.08965 0 3.83424Z"
          fill="#E9E9E9"
        />
        <path
          d="M0 3.83424V17.1672C0 19.8978 2.9675 21.6114 5.33593 20.2461L11.1177 16.9164L16.8994 13.5727C19.2679 12.2074 19.2679 8.79406 16.8994 7.42869L11.1177 4.08502L5.33593 0.755285C2.9675 -0.610045 0 1.08965 0 3.83424Z"
          fill="#E9E9E9"
        />
        <path
          d="M0 3.83424V17.1672C0 19.8978 2.9675 21.6114 5.33593 20.2461L11.1177 16.9164L16.8994 13.5727C19.2679 12.2074 19.2679 8.79406 16.8994 7.42869L11.1177 4.08502L5.33593 0.755285C2.9675 -0.610045 0 1.08965 0 3.83424Z"
          fill="#E9E9E9"
        />
        <path
          d="M0 3.83424V17.1672C0 19.8978 2.9675 21.6114 5.33593 20.2461L11.1177 16.9164L16.8994 13.5727C19.2679 12.2074 19.2679 8.79406 16.8994 7.42869L11.1177 4.08502L5.33593 0.755285C2.9675 -0.610045 0 1.08965 0 3.83424Z"
          fill="#E9E9E9"
        />
        <path
          d="M0 3.83424V17.1672C0 19.8978 2.9675 21.6114 5.33593 20.2461L11.1177 16.9164L16.8994 13.5727C19.2679 12.2074 19.2679 8.79406 16.8994 7.42869L11.1177 4.08502L5.33593 0.755285C2.9675 -0.610045 0 1.08965 0 3.83424Z"
          fill="#E9E9E9"
        />
        <path
          d="M0 3.83424V17.1672C0 19.8978 2.9675 21.6114 5.33593 20.2461L11.1177 16.9164L16.8994 13.5727C19.2679 12.2074 19.2679 8.79406 16.8994 7.42869L11.1177 4.08502L5.33593 0.755285C2.9675 -0.610045 0 1.08965 0 3.83424Z"
          fill="#E9E9E9"
        />
        <path
          d="M0 3.83424V17.1672C0 19.8978 2.9675 21.6114 5.33593 20.2461L11.1177 16.9164L16.8994 13.5727C19.2679 12.2074 19.2679 8.79406 16.8994 7.42869L11.1177 4.08502L5.33593 0.755285C2.9675 -0.610045 0 1.08965 0 3.83424Z"
          fill="#E9E9E9"
        />
        <path
          d="M0 3.83424V17.1672C0 19.8978 2.9675 21.6114 5.33593 20.2461L11.1177 16.9164L16.8994 13.5727C19.2679 12.2074 19.2679 8.79406 16.8994 7.42869L11.1177 4.08502L5.33593 0.755285C2.9675 -0.610045 0 1.08965 0 3.83424Z"
          fill="#E9E9E9"
        />
        <path
          d="M0 3.83424V17.1672C0 19.8978 2.9675 21.6114 5.33593 20.2461L11.1177 16.9164L16.8994 13.5727C19.2679 12.2074 19.2679 8.79406 16.8994 7.42869L11.1177 4.08502L5.33593 0.755285C2.9675 -0.610045 0 1.08965 0 3.83424Z"
          fill="#E9E9E9"
        />
        <path
          d="M22.9551 20.1495C22.3838 20.1495 21.9102 19.6758 21.9102 19.1046V1.88474C21.9102 1.31353 22.3838 0.839844 22.9551 0.839844C23.5263 0.839844 23.9999 1.31353 23.9999 1.88474V19.1046C23.9999 19.6758 23.5402 20.1495 22.9551 20.1495Z"
          fill="#E9E9E9"
        />
        <path
          d="M22.9551 20.1495C22.3838 20.1495 21.9102 19.6758 21.9102 19.1046V1.88474C21.9102 1.31353 22.3838 0.839844 22.9551 0.839844C23.5263 0.839844 23.9999 1.31353 23.9999 1.88474V19.1046C23.9999 19.6758 23.5402 20.1495 22.9551 20.1495Z"
          fill="#E9E9E9"
        />
        <path
          d="M22.9551 20.1495C22.3838 20.1495 21.9102 19.6758 21.9102 19.1046V1.88474C21.9102 1.31353 22.3838 0.839844 22.9551 0.839844C23.5263 0.839844 23.9999 1.31353 23.9999 1.88474V19.1046C23.9999 19.6758 23.5402 20.1495 22.9551 20.1495Z"
          fill="#E9E9E9"
        />
        <path
          d="M22.9551 20.1495C22.3838 20.1495 21.9102 19.6758 21.9102 19.1046V1.88474C21.9102 1.31353 22.3838 0.839844 22.9551 0.839844C23.5263 0.839844 23.9999 1.31353 23.9999 1.88474V19.1046C23.9999 19.6758 23.5402 20.1495 22.9551 20.1495Z"
          fill="#E9E9E9"
        />
        <path
          d="M22.9551 20.1495C22.3838 20.1495 21.9102 19.6758 21.9102 19.1046V1.88474C21.9102 1.31353 22.3838 0.839844 22.9551 0.839844C23.5263 0.839844 23.9999 1.31353 23.9999 1.88474V19.1046C23.9999 19.6758 23.5402 20.1495 22.9551 20.1495Z"
          fill="#E9E9E9"
        />
        <path
          d="M22.9551 20.1495C22.3838 20.1495 21.9102 19.6758 21.9102 19.1046V1.88474C21.9102 1.31353 22.3838 0.839844 22.9551 0.839844C23.5263 0.839844 23.9999 1.31353 23.9999 1.88474V19.1046C23.9999 19.6758 23.5402 20.1495 22.9551 20.1495Z"
          fill="#E9E9E9"
        />
        <path
          d="M22.9551 20.1495C22.3838 20.1495 21.9102 19.6758 21.9102 19.1046V1.88474C21.9102 1.31353 22.3838 0.839844 22.9551 0.839844C23.5263 0.839844 23.9999 1.31353 23.9999 1.88474V19.1046C23.9999 19.6758 23.5402 20.1495 22.9551 20.1495Z"
          fill="#E9E9E9"
        />
        <path
          d="M22.9551 20.1495C22.3838 20.1495 21.9102 19.6758 21.9102 19.1046V1.88474C21.9102 1.31353 22.3838 0.839844 22.9551 0.839844C23.5263 0.839844 23.9999 1.31353 23.9999 1.88474V19.1046C23.9999 19.6758 23.5402 20.1495 22.9551 20.1495Z"
          fill="#E9E9E9"
        />
        <path
          d="M22.9551 20.1495C22.3838 20.1495 21.9102 19.6758 21.9102 19.1046V1.88474C21.9102 1.31353 22.3838 0.839844 22.9551 0.839844C23.5263 0.839844 23.9999 1.31353 23.9999 1.88474V19.1046C23.9999 19.6758 23.5402 20.1495 22.9551 20.1495Z"
          fill="#E9E9E9"
        />
      </svg>
    </>
  );
};

export {Hanburger,Play,Pause,RightPlay,LeftPlay}