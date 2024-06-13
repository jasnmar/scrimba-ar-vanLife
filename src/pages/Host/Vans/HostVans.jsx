import { Suspense } from "react";
import "./HostVans.css";
import { Link, useLoaderData, Await } from "react-router-dom";


function HostVans() {
  const vansPromise = useLoaderData();

  function listVans(vans){
    let vanCards = [];
    vanCards = vans.map((van) => {
      return (
        <div key={van.id}>
          <Link to={van.id}>
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
    return vanCards
  }

  return (
    <>
      <h1 className="hostvans--title">Your listed Vans</h1>
      <Suspense fallback={<h2>Loading Vans...</h2>}>
        <Await resolve={vansPromise.vansData}>
          {listVans}  
        </Await>
      </Suspense>
      
    </>
  );
}

export default HostVans;
