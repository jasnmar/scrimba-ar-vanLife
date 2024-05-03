import "./Vans.css";
import { useState, useEffect } from "react";
import Van from "../../../components/Van/Van";
import { useSearchParams } from "react-router-dom";
import { getData } from "../../../utils/api/api";
import Loading from "../../../components/Loading/Loading";

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

function Vans() {
  const [searchParams, setSearchParams] = useSearchParams()

  const [vans, setVans] = useState()
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const typeFilter = searchParams.get("type")

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const vansData = await getData('/api/vans');
        console.log('vansData: ', vansData)
        setVans(vansData.vans);
      } catch(err) {
        setError(err)
      } finally {
        setLoading(false)
      }
      setLoading(false)
    };
    fetchData();
  }, []);

  if (loading) {
    return <Loading />
  }
  if (error) {
    return <h1 aria-live="assertive">Error: {error.message}</h1>
  }

  let filteredVans
  if(vans) {
    filteredVans = (typeFilter) ? vans.filter((van) => van.type === typeFilter) : vans
  }
  let vanList;
  if (filteredVans) {
    vanList = filteredVans.map((van) => {
      return <Van key={van.id} state={searchParams} data={van} />;
    });
  }
  // console.log('vans: ', vans)
  return (
    <>
        <div className="vans--vans-main">
          <h1>Explore our van options</h1>
          <div className="vans--filter-bar">
            <button onClick={()=>setSearchParams({type: "simple"})} 
              className={"van-type simple" + (typeFilter=="simple" && " selected")}>
                Simple
            </button>
            <button onClick={()=>setSearchParams({type: "rugged"})} 
              className={"van-type rugged" + (typeFilter=="rugged" && " selected")}>
                Rugged
            </button>
            <button onClick={()=>setSearchParams({type: "luxury"})} 
              className={"van-type luxury" + (typeFilter=="luxury" && " selected")}>
                Luxury
            </button>
            {typeFilter && <button onClick={()=>setSearchParams({})} className="van-type clear-filters">Clear Filter</button>}
          </div>
          <div className="vans--vanlist">{vanList}</div>
        </div>
    </>
  );
}

export default Vans;
