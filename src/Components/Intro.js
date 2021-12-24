import React from 'react'
import logo from './Images/CPH_big.png'
import Bounce from 'react-reveal/Bounce';
const Intro = () => {
    return (
        <div>
            <Bounce>
            <div style={{display:"flex",justifyContent:"center",paddingTop:"55px"}}>
            <img src={logo} alt='LOGO'></img></div></Bounce>
        </div>
    )
}

export default Intro
