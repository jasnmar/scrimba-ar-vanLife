import "./Vans.css";
//import { useState} from "react";
import Van from "../../../components/Van/Van";
import { useSearchParams, useLoaderData, Await } from "react-router-dom";

function Vans() {
  const [searchParams, setSearchParams] = useSearchParams()

  const vans = useLoaderData()
  const typeFilter = searchParams.get("type")
  
  
  return (
    <>
    <Await resolve={vans.vansData}>
      {(loadedVans) => {
        const filteredVans = (typeFilter) ? loadedVans.filter((van) => van.type === typeFilter) : loadedVans
        const vanList = filteredVans.map((van) => {
          return <Van key={van.id} state={searchParams} data={van} />;
        });
        return (
          <>
 

    
      <div className="vans--vans-main">
        <h1>Explore our van options</h1>
        <div className="vans--filter-bar">
          <button onClick={()=>setSearchParams({type: "simple"})} 
            className={"van-type simple" + (typeFilter=="simple" ? " selected": "")}>
              Simple
          </button>
          <button onClick={()=>setSearchParams({type: "rugged"})} 
            className={"van-type rugged " + (typeFilter=="rugged" ? " selected": "")}>
              Rugged
          </button>
          <button onClick={()=>setSearchParams({type: "luxury"})} 
            className={"van-type luxury " + (typeFilter=="luxury" ? " selected": "")}>
              Luxury
          </button>
          {typeFilter && <button onClick={()=>setSearchParams({})} className="van-type clear-filters">Clear Filter</button>}
        </div>
        <div className="vans--vanlist">{vanList}</div>
      </div>
      </>
        )
      }}
      </Await>
    </>
  );
}

export default Vans;

