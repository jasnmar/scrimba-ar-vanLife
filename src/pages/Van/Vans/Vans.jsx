import "./Vans.css";
import { useState, useEffect } from "react";
import Van from "../../../components/Van/Van";
import Filter from "../../../components/Filter/Filter";
import FilterContext from "../../../components/Filter/FilterContext";

const initialState = [
  { filterName: "simple", state: false },
  { filterName: "luxury", state: false },
  { filterName: "rugged", state: false },
];

async function getData() {
  const res = await fetch("api/vans");
  const data = await res.json();
  return await data.vans;
}

function Vans() {
  const [vans, setVans] = useState();
  const [filterState, setFilterState] = useState(initialState);
  const [filteredVans, setFilteredVans] = useState();
  function resetFilterState() {
    setFilterState(initialState);
  }

  function toggleFilterState(filter) {
    setFilterState((prevFilterState) => {
      const nFilterState = [...prevFilterState];
      const newArray = nFilterState.map((fState) => {
        if (filter === fState.filterName) {
          fState = { ...fState, state: !fState.state };
        }
        return fState;
      });
      return newArray;
    });
  }
  const values = { filterState, toggleFilterState, resetFilterState };

  useEffect(() => {
    const fetchData = async () => {
      const vansData = await getData();
      setVans(vansData);
    };
    fetchData();
  }, []);

  useEffect(() => {
    let nFilteredVans;
    if (vans) {
      nFilteredVans = vans.flatMap((van) => {
        let filterThis = false;
        for (let filter of filterState) {
          if (filter.state) {
            const match = filter.filterName;
            if (match === van.type) {
              filterThis = true;
            }
          }
        }
        if (filterThis) {
          return [];
        } else {
          return [van];
        }
      });
    }
    setFilteredVans(nFilteredVans);
  }, [vans, filterState]);

  let vanList;
  if (filteredVans) {
    vanList = filteredVans.map((van) => {
      return <Van key={van.id} data={van} />;
    });
  }

  return (
    <>
      <FilterContext.Provider value={values}>
        <div className="vans--vans-main">
          <h1>Explore our van options</h1>
          <Filter>
            <div className="vans--vanlist">{vanList}</div>
          </Filter>
        </div>
      </FilterContext.Provider>
    </>
  );
}

export default Vans;
