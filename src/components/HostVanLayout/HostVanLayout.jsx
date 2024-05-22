import "./HostVanLayout.css";
import { NavLink, Outlet, Link, useLoaderData } from "react-router-dom";
import Badge from "../Badge/Badge";

function HostVanLayout() {
  const van = useLoaderData();

  return (
    <>
      <div className="vandetail--link">
        <Link to=".." relative="path">
          {" "}
          &larr; Back to all vans
        </Link>
      </div>
      <div className="hostvanlayout--page">
        <div className="hostvanlayout--card">
          <img className="hostvanlayout--van-image" src={van.imageUrl}></img>
          <div className="hostvanlayout--van-data">
            <Badge styled={true} label={van.type} />
            <p className="hostvanlayout--van-title">{van.name}</p>
            <p className="hostvanlayout--van-price">
              ${van.price}
              <span className="hostvanlayout--van-price-day">/day</span>
            </p>
          </div>
        </div>
        <nav className="host--nav-main">
          <div className="host--nav-items">
            <NavLink
              end
              className={({ isActive }) =>
                isActive ? "activeLink" : "host--nav-item"
              }
              to="."
            >
              Details
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "activeLink" : "host--nav-item"
              }
              to="pricing"
            >
              Pricing
            </NavLink>
            <NavLink
              className={({ isActive }) =>
                isActive ? "activeLink" : "host--nav-item"
              }
              to="photos"
            >
              Photos
            </NavLink>
          </div>
        </nav>
        <Outlet context={[van]} />
      </div>
    </>
  );
}

export default HostVanLayout;
