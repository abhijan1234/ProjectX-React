import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import "./Main.scss"
const Main = (props:any) => {
  return (
    <div>
        <Navbar />
        <Sidebar />
        <div className='mainPageContainer'>
            Main Page
        </div>  
    </div>
  )
}

export default Main
