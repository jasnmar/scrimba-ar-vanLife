import { useEffect, useState } from "react";
import "./VanDetail.css";
import { Link, useParams, useLocation } from "react-router-dom";
import Badge from "../../../components/Badge/Badge";
import { getData } from "../../../utils/api/api";
import Loading from "../../../components/Loading/Loading";

function VanDetail() {
  const [vanData, setVanData] = useState();
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const params = useParams();
  const location = useLocation()
  console.log('location: ', location)

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true)
      try {
        const vanInfo = await getData(`/api/vans/${params.id}`);
        setVanData(vanInfo.vans);
      } catch(err) {
        setError(err)
      } finally {
        setLoading(false)
      }
    };
    fetchData();
  }, [params.id]);

  const backPath = location.state?.search ? "..?" + location.state.search : ".."
  const oldUrl = new URLSearchParams (location.state?.search)
  let oldSearch = ""
  if(oldUrl) {
    oldSearch = oldUrl.get("type")
  }
  const backText = oldSearch ? oldSearch : "all"

  if(loading) {
    return <Loading />
  }

  if (error) {
    return <h1>There was an error: {error.message}</h1>
  }
  
  if (vanData) {
    return (
      <div className="vandetail--main">
        <div className="vandetail--link">
          <Link to={backPath} relative="path"> &larr; Back to {backText} vans</Link>
        </div>
        <img className="vandetail--van-image" src={vanData.imageUrl}></img>
        <div className="vandetail--bottom-text">
          <div className="vandetail--badge">
            <Badge label={vanData.type} styled={true}></Badge>
          </div>
          <p className="vandetail--title">{vanData.name}</p>
          <p className="vandetail--price">
            ${vanData.price}
            <span className="vandetail--day">/day</span>
          </p>
          <p className="vandetail--description">{vanData.description}</p>
        </div>
        <button className="vandetail--action btn">Rent this van</button>
      </div>
    );
  }
}

export default VanDetail;
