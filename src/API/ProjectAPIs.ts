import {getProjectsApiURL,addNewProjectApiURL} from "./constants"
export const getAllProjects =async ()=>{
    var response = fetch(getProjectsApiURL)
    .then(async response=>{
        return await response.json()
    }).catch(error=>{
        return null
    })
    return response
}