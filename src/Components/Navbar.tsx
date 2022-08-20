import React, { useEffect } from 'react'
import {AiFillBell,AiFillSetting} from "react-icons/ai"
import "./Navbar.scss"
import me from "../Static/me.jpeg"

const Navbar = (props:any) => {
  return (
    <>
        <nav className='homeNavbar'>
            <h1 className='home-project-name'>Project X</h1>
            <ul className='home-navbar_list'>
                <li className='home-navbar_item'>
                    <AiFillBell className='home-navbar_link'/>
                </li>
                <li className='home-navbar_item'>
                    <AiFillSetting className='home-navbar_link'/>
                </li>
                <li style={{paddingLeft:"5px"}}>
                    <img className='home-profileImage' src={me} alt="" />
                </li>
            </ul>
        </nav>
    </>
  )
}

export default Navbar
