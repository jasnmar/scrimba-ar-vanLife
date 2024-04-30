import "./Van.css"
import Badge from "../Badge/Badge"

function Van(props) {
  return (
    <>
        <div key={props.data.id} className="van--card">
          <img className="van--card-image" src={props.data.imageUrl}></img>
          <div className="van--card-label">
            <div className="van--card-left">
              <h1>{props.data.name}</h1>
              <Badge label={props.data.type} styled="true" />
            </div>
            <div className="van--card-price">
              <h1>${props.data.price}</h1><p className="van--card-day">/day</p>
            </div>
            
          </div>
      </div>
    </>
  )
}

export default Van