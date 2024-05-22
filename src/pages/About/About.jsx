import "./About.css";
import heroImg from "../../assets/about-header.png";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate()
  function gotoVans() {
    navigate("/vans")
  }

  return (
    <>
      <img className="about--hero-img" src={heroImg}></img>
      <div className="about--main">
        <h1>Don’t squeeze in a sedan when you could relax in a van.</h1>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
        </p>
        <p>
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels
        </p>
        <div className="about--action">
          <h2>
            Your destination is waiting.<br></br>
            Your van is ready.
          </h2>
          <button onClick={gotoVans} className="about--action-btn btn">Explore our vans</button>
        </div>
      </div>
    </>
  );
}

export default About;
