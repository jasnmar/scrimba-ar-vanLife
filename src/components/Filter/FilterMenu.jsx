import "./Filter.css"
import Badge from "../Badge/Badge"
import FilterContext from "./FilterContext"
import { useContext } from "react"

function FilterMenu() {
  const fState = useContext(FilterContext)

   const badgeList = fState.filterState.map(filter => {
    return <Badge onClick={fState.toggleFilterState} styled={filter.state} label={filter.filterName} key={filter.filterName} />
   })
  return (
    <>
      {badgeList}
    </>
  )
}

export default FilterMenu