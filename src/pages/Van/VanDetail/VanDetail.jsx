import { useEffect, useState } from "react";
import "./VanDetail.css";
import { Link, useParams, useLocation } from "react-router-dom";
import Badge from "../../../components/Badge/Badge";

async function getData(id) {
  const res = await fetch(`/api/vans/${id}`);
  const data = await res.json();
  return data;
}

function VanDetail() {
  const [vanData, setVanData] = useState();
  const params = useParams();
  const location = useLocation()
  console.log('location: ', location)

  useEffect(() => {
    const fetchData = async () => {
      const vanInfo = await getData(params.id);
      setVanData(vanInfo.vans);
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
      </div>
    );
  }
}

export default VanDetail;
