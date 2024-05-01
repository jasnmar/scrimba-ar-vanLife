import "./Filter.css"
import FilterMenu from "./FilterMenu"

function Filter({children}) {
  
  return (
    <>
      <div className="filter--filter-bar">
        <FilterMenu />
      </div>
      {children}
    </>
  )
}


export default Filter