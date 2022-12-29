import Navbar from '../../Components/Navbar'
import Sidebar from '../../Components/Sidebar'
import NewProject from './NewProject'
import "./Projects.scss"
const Projects = (props:any) => {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className='projectPageContainer'>
          Project Page
          <NewProject />
      </div>      
    </div>
  )
}

export default Projects
