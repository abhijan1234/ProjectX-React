import React from 'react'
import Navbar from '../../Components/Navbar'
import Sidebar from '../../Components/Sidebar'
import "./Projects.scss"
const Projects = (props:any) => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className='projectPageContainer'>
          Project Page
      </div>      
    </div>
  )
}

export default Projects
