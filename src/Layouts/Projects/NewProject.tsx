import { useEffect, useState } from "react"
import { getAllProjects } from "../../API/ProjectAPIs"
import LabelInput from "../../Components/LabelInput/LabelInput"

const NewProject = () => {
  const [allProjects,setAllProjects] = useState([])
  const [newProjectClick,setNewProjectClick] = useState(false)

  const handleProjectName = (e:any) =>{

  }
  const getAllProjectInformation = async()=>{
    var data = await getAllProjects()
    console.log("Data isss",data[0])
    setAllProjects(data[0])
  }

  return (
    <div className="NewProjectContainer">
      <LabelInput name = "Project Name" type = "text" mandatory = {true} onChange={(e:any)=>handleProjectName} ></LabelInput>
      <button onClick={getAllProjectInformation}>Click</button>
    </div>
  )
}

export default NewProject
