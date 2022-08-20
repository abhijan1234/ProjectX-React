import "./HomePage.scss"
import image from "../Static/open1.jpg"
import slider1 from "../Static/slider1.jpg"
import slider2 from "../Static/slider2.jpg"
import Slider from "./Slider"
import NavbarControl from "./NavbarControl"
import { useHistory } from "react-router-dom"
const HomePage = () => {
  let history=useHistory()
  return (
    <div>
        <NavbarControl history={history}/>
        <div className="home-container">
          <img className="logo" src={image} alt="" />
          <h1 className="title">Learn and Do</h1>
        </div>
      <Slider imageSrc={slider1} title="Let's Do It Together" subTitle="Open Mind For Different View" flipped={true}/>
      <Slider imageSrc={slider2} title="Build,Work,Grow" subTitle="Change The World" flipped={false}/>

    </div>
  )
}

export default HomePage
