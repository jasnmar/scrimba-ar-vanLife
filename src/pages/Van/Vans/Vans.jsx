import "./Vans.css";
import { useState, useEffect } from "react";
import Van from "../../../components/Van/Van";
import Filter from "../../../components/Filter/Filter";
import { useSearchParams } from "react-router-dom";





async function getData() {
  const res = await fetch("/api/vans");
  const data = await res.json();
  return await data.vans;
}

function Vans() {
  const [searchParams, setSearchParams] = useSearchParams()

  const [vans, setVans] = useState();

  const typeFilter = searchParams.get("type")
  console.log('typeFilter: ', typeFilter)

  useEffect(() => {
    const fetchData = async () => {
      const vansData = await getData();
      setVans(vansData);
    };
    fetchData();
  }, []);


  let vanList;
  if (vans) {
    vanList = vans.map((van) => {
      return <Van key={van.id} data={van} />;
    });
  }

  return (
    <>
      
        <div className="vans--vans-main">
          <h1>Explore our van options</h1>
          <Filter>
            <div className="vans--vanlist">{vanList}</div>
          </Filter>
        </div>
    </>
  );
}

export default Vans;
