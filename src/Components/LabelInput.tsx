import "./LabelInput.scss"

const LabelInput = (props:any) => {

  return (
      <>
        <div>
            <div className='label-title'>
                <span>{props.name}{props.mandatory?"*":""}</span>
            </div>
            <div className='label-input-area'>
                <input onChange={props.onChange} className='label-input-field' spellCheck={"false"} type={props.type}></input>
            </div>
        </div>  
      </>
    
  )
}

export default LabelInput
