import "./Filter.css"
import { useState } from "react"
import FilterContext from "./FilterContext"
import FilterMenu from "./FilterMenu"

const initialState = [
  {filterName: "simple", state:false},
  {filterName: "luxury", state:false},
  {filterName: "rugged", state:false}]


function Filter() {
  const [filterState, setFilterState] = useState(initialState)
  console.log('filterState: ', filterState)

  function toggleFilterState(filter) {
    console.log('filter: ', filter)
    setFilterState((prevFilterState) => {
      const nFilterState = [...prevFilterState]
      const newArray = nFilterState.map(fState => {
        if(filter===fState.filterName) {
          fState = {...fState, state:!fState.state}
        } return fState
      })
      return newArray
    })
  }
  const values =  {filterState, toggleFilterState}


  return (
    <FilterContext.Provider value={values}>
    <>
      <FilterMenu />
    </>
    </FilterContext.Provider>
  )
}


export default Filter