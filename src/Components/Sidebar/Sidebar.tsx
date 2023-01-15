import React from 'react'
import "./Sidebar.scss"
import { Link } from 'react-router-dom'

const Sidebar = (props:any) => {
  return (
    <div className='mainContainer'>
      <ul className='mainSideList'>
          <div className='eachListContainer'>
              <div className='eachListItem'>
                  <Link to={"/1/homeLand"} className='itemName'>
                      Home
                  </Link>
              </div>
          </div>

          <div className='eachListContainer'>
              <div className='eachListItem'>
                  <Link to={"/1/contacts"} className='itemName'>
                    Contacts
                  </Link>
              </div>
          </div>

          <div className='eachListContainer'>
              <div className='eachListItem'>
                  <Link to={"/1/projects"} className='itemName'>
                    Projects
                  </Link>
              </div>
          </div>

          <div className='eachListContainer'>
              <div className='eachListItem'>
                  <Link to={"/1/reports"} className='itemName'>
                    Reports
                  </Link>
              </div>
          </div>

          <div className='eachListContainer'>
              <div className='eachListItem'>
                  <Link to={""} className='itemName'>
                      Test
                  </Link>
              </div>
          </div>
          {/* <Link to={"/1/homeLand"} className='mainListItems'>
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
          </Link> */}
      </ul>
    </div>
  )
}

export default Sidebar
