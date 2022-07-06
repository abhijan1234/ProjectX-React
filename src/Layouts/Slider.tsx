import React from 'react'
import "./Slider.css"
import {useInView} from "react-intersection-observer"

const Slider = (props:any) => {

    const {ref,inView}=useInView({
        threshold:0.3
    })

    const renderContent=()=>{
        if(!props.flipped)
        {
            return<>
            <img src={props.imageSrc} className="slider_image"></img>
            <div className='slider_content'>
                <h1 className='slider_title'>
                    {props.title}
                </h1>
                <p>{props.subTitle}</p>
            </div>
            </>
        }
        else{
            return<>
            <div className='slider_content'>
                <h1 className='slider_title'>
                    {props.title}
                </h1>
                <p>{props.subTitle}</p>
            </div>
            <img src={props.imageSrc} className="slider_image"></img>
            
            </>
        }
    }
  return (
    <div className={inView?"slider slider_zoom":"slider"} ref={ref}>
      {renderContent()}
    </div>
  )
}

export default Slider
