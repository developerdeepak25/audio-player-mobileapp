import React from 'react'
import './Header.scss'
import {Hanburger} from '../svg-icon/Svg';

const Header = ({data}) => {
  // console.log("🚀 ~ file: header.js:5 ~ Header ~ dḁta:", data)
  return (
    <div className="header">
    <div className="header-top layout">
      <h2 className='heading'>Discover Music</h2>
      <div className="hanburger">
        <Hanburger/>
      </div>      
    </div>

    <div className="cover-wrapper layout">
      <div className="cover">
        <img src={data.img} alt="cover" className="cover-img" />
        <div className="cover-title">{data.title}</div>
      </div>
    </div>
    </div>
  );
}

export default Header
