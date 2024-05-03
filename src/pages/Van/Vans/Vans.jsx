import "./Vans.css";
import { useState, useEffect } from "react";
import Van from "../../../components/Van/Van";
import { useSearchParams, Link } from "react-router-dom";

    /**
     * Challenge: add links to filter the vans by type. Use a hard-coded
     * `to` string like we just practiced. The types are "simple", 
     * "luxury", and "rugged".
     * 
     * For now, give the Links a className of `van-type simple` (and
     * manually replace "simple" with "luxury" and "rugged" for 
     * the Links that filter by those types.)
     * 
     * Include a Link to clear the filters. Its className should be
     * `van-type clear-filters`
     */
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

  let filteredVans
  if(vans) {
    filteredVans = (typeFilter) ? vans.filter((van) => van.type === typeFilter) : vans
  }
  let vanList;
  if (filteredVans) {
    vanList = filteredVans.map((van) => {
      return <Van key={van.id} data={van} />;
    });
  }
  console.log('vans: ', vans)
  return (
    <>
        <div className="vans--vans-main">
          <h1>Explore our van options</h1>
          <div className="vans--filter-bar">
            <Link to="?type=simple" className="van-type simple">Simple</Link>
            <Link to="?type=rugged" className="van-type rugged">Rugged</Link>
            <Link to="?type=luxury" className="van-type luxury">Luxury</Link>
            <Link to="." className="van-type clear-filters">Clear Filter</Link>
          </div>
          <div className="vans--vanlist">{vanList}</div>
        </div>
    </>
  );
}

export default Vans;
