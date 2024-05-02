import { useEffect, useState } from "react"
import "./HostVans.css"
import { Link } from "react-router-dom";

async function getData() {
  const res = await fetch("/api/host/vans");
  const data = await res.json();
  return await data.vans;
}

function HostVans() {
  const [vans, setVans] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      const vansData = await getData();
      setVans(vansData);
    };
    fetchData();
  }, []);
  let vanCards=[]
  if(vans) {
    vanCards = vans.map((van) => {
      return (

        <div key={van.id} >
          <Link to={"/host/vans/"+ van.id}>
            <div className="hostvans--minicard">
              <img className="hostvans--van-image" src={van.imageUrl}></img>
              <div className="hostvans--van-text">
                <p className="hostvans--name">{van.name}</p>
                <p className="hostvans--price">${van.price}/day</p>
              </div>
            </div>
          </Link>
        </div>
      )
    })
  }

  if(vans) {
    return (
      <>
        <h1 className="hostvans--title">Your listed Vans</h1>
        {vanCards}
      </>
    )
  } else {
    return <h1>Loading...</h1>
  }
}

export default HostVans