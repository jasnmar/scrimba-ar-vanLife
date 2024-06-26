import "./VanDetail.css";
import { Link, useLocation, useLoaderData } from "react-router-dom";
import Badge from "../../../components/Badge/Badge";

function VanDetail() {
  const location = useLocation();
  const vanData = useLoaderData();

  const backPath = location.state?.search
    ? "..?" + location.state.search
    : "..";
  const oldUrl = new URLSearchParams(location.state?.search);
  let oldSearch = "";
  if (oldUrl) {
    oldSearch = oldUrl.get("type");
  }
  const backText = oldSearch ? oldSearch : "all";

  return (
    <div className="vandetail--main">
      <div className="vandetail--link">
        <Link to={backPath} relative="path">
          {" "}
          &larr; Back to {backText} vans
        </Link>
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

export default VanDetail;
