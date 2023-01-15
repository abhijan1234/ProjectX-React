import { useEffect, useState } from 'react'
import { getAllProjects } from '../../API/ProjectAPIs'
import Card from '../../Components/Card/Card'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import "./Projects.scss"
const Projects = (props: any) => {
  const [projectList,setProjectList] = useState([])
  useEffect(()=>{
    getAllProjectInformation()
  },[])
  const getAllProjectInformation = async()=>{
    var data = await getAllProjects()
    console.log("Data isss",data)
    setProjectList(data)
  } 
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className='project-main-tile'>
        <div className='project-row-tile'>
          <div className='projectPageContainer'>
            <Card headerName = "My Projects">
              <table>
                <tr>
                  <th style={{"paddingRight":"85px"}}>Project Name</th>
                  <th style={{"paddingRight":"20px"}}>Status</th>
                  <th>Start Time</th>
                </tr>
              </table>
            </Card>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Projects
