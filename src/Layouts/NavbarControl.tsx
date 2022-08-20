import React, { useState } from 'react'
import {FiMenu,FiX} from "react-icons/fi"
import SignIn from './SignIn'
import './NavbarControl.scss'
import Popup from '../Components/Popup'

const NavbarControl = (props:any) => {
    const [signInPopUp,setSignInPopUp]=useState(false)
    const [registerPopUp,setRegisterPopUp]=useState(false)
    const [signInAllow,setSignInAllow]=useState(false)

    const signInDataFound=()=>{
        console.log("Found data")
        setSignInAllow(true)
    }

    const signInHandleClick=()=>{
        setSignInPopUp(true) 
    }

    const registerHandleClick=()=>{
        setRegisterPopUp(true)
    }
    const closeModal=()=>{
        setSignInPopUp(false)
        setRegisterPopUp(false)
        setSignInAllow(false)
    }

    const signInHandle=()=>{
        console.log("Sign in clicked")
        props.history.push("/1/homeLand")
    }
  return (
      <>
        <nav className='navbar'> 
            <h1 className='project-name'>Project X</h1>
            <ul className='navbar_list'>
                <li className='navbar_item'>
                    <div className='navbar_link'>About</div>
                </li>
                <li className='navbar_item'>
                    <div className='navbar_link'>Contact Us</div>
                </li>
                <li className='navbar_item'>
                    <div className='navbar_link' onClick={signInHandleClick}>Sign In</div>
                </li>
                <li className='navbar_item'>
                    <div className='navbar_link' onClick={registerHandleClick}>Register</div>
                </li>
            </ul>
        </nav>
        {signInPopUp && (<Popup 
                        title={"Sign In"}
                        opened={signInPopUp} 
                        primaryButtonHandle={signInHandle} 
                        primaryButton={"Log In"} 
                        secondaryButton={"Cancel"}
                        closeHandle={closeModal}
                        secondaryButtonHandle={closeModal}
                        primaryButtomDisabled={signInAllow}>
                <SignIn signInDataFound={signInDataFound}/>
            </Popup>)
        }
        {registerPopUp && (<Popup 
                        title={"Register"}
                        opened={registerPopUp} 
                        primaryButtonHandle={registerHandleClick} 
                        primaryButton={"Register"} 
                        secondaryButton={"Cancel"}
                        closeHandle={closeModal}
                        secondaryButtonHandle={closeModal}
                        primaryButtomDisabled={signInAllow}>
                {/* <SignIn signInDataFound={signInDataFound}/> */}
            </Popup>)}
      </>
    
  )
}

export default NavbarControl
