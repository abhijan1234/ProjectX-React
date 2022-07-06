import "./HomePage.css"
import image from "../Static/open.jpg"
import slider1 from "../Static/slider1.jpg"
import slider2 from "../Static/slider2.jpg"
import Slider from "./Slider"
import Navbar from "../Components/Navbar"
const HomePage = () => {
  const navbarItems=[
    {title:"About"},
    {title:"Contact Us"},
    {title:"Log In"},
    {title:"Sign Up"},

  ]
  return (
    <div>
        <Navbar navbarItems={navbarItems}/>
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
