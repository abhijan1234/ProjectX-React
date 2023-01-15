import React from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'

const Contacts = () => {
  return (
    <div>
      <Navbar />
        <Sidebar />
        <div className='mainPageContainer'>
            Contacts Page
        </div>  
    </div>
  )
}

export default Contacts
