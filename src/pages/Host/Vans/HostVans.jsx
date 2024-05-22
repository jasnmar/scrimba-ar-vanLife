import { useEffect, useState } from "react"
import "./HostVans.css"
import { Link } from "react-router-dom";
import { getVans } from "../../../utils/api/api";
import Loading from "../../../components/Loading/Loading";

function HostVans() {
  const [vans, setVans] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const vansData = await getVans("123");
        setVans(vansData);
      } catch(err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    };
    fetchData();
  }, []);

  if(loading) {
    return <Loading />
  }
  if (error) {
    return <h1>There was an error: {error.message}</h1>
  }

  let vanCards=[]
  if(vans) {
    vanCards = vans.map((van) => {
      return (

        <div key={van.id} >
          <Link to={van.id}>
            <div className="hostvans--minicard">
              <img className="hostvans--van-image" src={van.imageUrl}></img>
              <div className="hostvans--van-text">
                <p className="hostvans--name">{van.name}</p>
                <p className="hostvans--price">${van.price}/day</p>
              </div>
            </div>
          </Link>
        </div>
      )
    })
  }

  if(vans) {
    return (
      <>
        <h1 className="hostvans--title">Your listed Vans</h1>
        {vanCards}
      </>
    )
  } else {
    return <Loading />
  }
}

export default HostVans