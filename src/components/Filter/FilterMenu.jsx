import "./Filter.css"
import Badge from "../Badge/Badge"
const initialState = [
  { filterName: "simple", state: false },
  { filterName: "luxury", state: false },
  { filterName: "rugged", state: false },
];

function FilterMenu() {


   const badgeList = initialState.map(filter => {
    return <Badge styled={filter.state} label={filter.filterName} key={filter.filterName} />
   })
  return (
    <>
      {badgeList}
      <button className="filter--filter-btn">Clear Filters</button>
    </>
  )
}

export default FilterMenu