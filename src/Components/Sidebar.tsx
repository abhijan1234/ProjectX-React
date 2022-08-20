import React from 'react'
import "./Sidebar.scss"
import {AiFillHome,AiFillContacts,AiFillProject,AiFillBook,AiFillApi} from "react-icons/ai"
import { Link } from 'react-router-dom'

const Sidebar = (props:any) => {
  return (
    <div className='mainContainer'>
      <ul className='mainSideList'>
          <Link to={"/1/homeLand"} className='mainListItems'>
              <AiFillHome />
              <div className='sideItems'>
                  Home
              </div>
          </Link>
          <Link to={"/1/contacts"} className='mainListItems'>
              <AiFillContacts />
              <div className='sideItems'>
                  Contacts
              </div>
          </Link>
          <Link to={"/1/projects"} className='mainListItems'>
              <AiFillProject />
              <div className='sideItems'>
                  My Projects
              </div>
          </Link>
          <Link to={"/1/reports"} className='mainListItems'>
              <AiFillBook/>
              <div className='sideItems'>
                  Reports
              </div>
          </Link>          
          <Link to={""} className='mainListItems'>
              <AiFillApi />
              <div className='sideItems'>
                  Test
              </div>
          </Link>
      </ul>
    </div>
  )
}

export default Sidebar
