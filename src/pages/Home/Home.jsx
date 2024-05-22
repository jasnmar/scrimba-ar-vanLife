import "./Home.css";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate()
  function gotoVans() {
    navigate("/vans")
  }

  return (
    <>
      <div className="home">
        <div className="home--main">
          <h1>You got the travel plans, we got the travel vans.</h1>
          <p>
            Add adventure to your life by joining the #vanlife movement. Rent
            the perfect van to make your perfect road trip.
          </p>
          <button onClick={gotoVans} className="home--main-btn btn">Find your van</button>
        </div>
      </div>
    </>
  );
}

export default Home;
