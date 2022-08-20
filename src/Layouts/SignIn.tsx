import { useState } from 'react'
import LabelInput from '../Components/LabelInput'

const SignIn = (props:any) => {
  const[email,setEmail]=useState("")
  const[password,setPassword]=useState("")
  const [wrongEmail,setWrongEmail]=useState(false)

  const handleEmail=(e:any)=>{
    e.preventDefault()
    setEmail(e.target.value)
    if(!e.target.value.includes("@") || !e.target.value.includes(".com"))
      setWrongEmail(true)
    else
      setWrongEmail(false)
    if(password!==null && password!==undefined && password!=="")
    {
      props.signInDataFound()
    }
  }

  const handlePassword=(e:any)=>{
    if(!email.includes("@") || !email.includes(".com")){
      setWrongEmail(true)
    }
    else{
      setWrongEmail(false)
    }
    e.preventDefault()
    setPassword(e.target.value)
    if(email!==null && email!==undefined && email!=="")
    {
      props.signInDataFound()
    }
  }
  return (
    <div style={{"marginTop":"8%"}}>
      <LabelInput type="email" name="Email Id" mandatory={true} onChange={handleEmail}/>
      { wrongEmail ?(
        <span style={{fontSize:"8px",marginLeft:"8%", color:"red"}}>Invalid Email Id</span>
      ):<span style={{fontSize:"8px",marginLeft:"8%"}}></span>

      }
      <LabelInput type="password" name ="Password" mandatory={true} onChange={handlePassword}/>
      <span style={{fontSize:"8px",marginLeft:"5vh", color:"blue",cursor:"pointer"}}>Forgot Password?</span>
    </div>
  )
}

export default SignIn
