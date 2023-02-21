import { useEffect, useState } from 'react'
import { getAllProjects } from '../../API/ProjectAPIs'
import Card from '../../Components/Card/Card'
import Navbar from '../../Components/Navbar/Navbar'
import Sidebar from '../../Components/Sidebar/Sidebar'
import Data from "../../Testdata.json"
import "./Projects.scss"
const Projects = (props: any) => {
  const [projectList,setProjectList] = useState([{"ProjectName":"","Status":"","StartTime":"","EndTime":"","Mentor":""}])
  useEffect(()=>{
    getAllProjectInformation()
  },[])
  const getAllProjectInformation = async()=>{
    var data = Data//await getAllProjects()
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
              <table className='content-table'>
                <thead>
                  <tr>
                    <th>Project Name</th>
                    <th>Status</th>
                    <th>Start Time</th>
                    <th>End Time</th>
                    <th>Mentor</th>
                  </tr>
                </thead>
                <tbody>{
                  projectList.map(item=>
                    <tr>
                      <td>{item.ProjectName}</td>
                      <td>{item.Status}</td>
                      <td>{item.StartTime}</td>
                      <td>{item.EndTime.length>0?item.EndTime:"-"}</td>
                      <td>{item.Mentor}</td>
                    </tr>
                    )
                  }
                </tbody>
              </table>
            </Card>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Projects
