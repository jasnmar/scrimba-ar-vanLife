import "./About.css"
import Nav from "./Nav"
import heroImg from "./assets/about-header.png"

function About() {
  return (
    <>
      <Nav />
      <img className="about--hero-img" src={heroImg}></img>
      <div className="about--main">
        <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p>Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
        (Hitch costs extra 😉)</p>
        <p> 
        Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels</p>
        <div className="about--action">
          <h2>Your destination is waiting.<br></br>
          Your van is ready.</h2>
        <button className="about--action-btn">Explore our vans</button>
        </div>
      </div>
    </>
  )
}

export default About