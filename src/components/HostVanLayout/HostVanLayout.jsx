import "./HostVanLayout.css";
import { NavLink, Outlet, Link, useLoaderData, Await } from "react-router-dom";
import Badge from "../Badge/Badge";
import { Suspense } from "react";

function HostVanLayout() {
  const vanPromise = useLoaderData();
  function vanPage(van) {
    return (
      <>
        <img className="hostvanlayout--van-image" src={van.imageUrl}></img>
          <div className="hostvanlayout--van-data">
            <Badge styled={true} label={van.type} />
            <p className="hostvanlayout--van-title">{van.name}</p>
            <p className="hostvanlayout--van-price">
              ${van.price}
              <span className="hostvanlayout--van-price-day">/day</span>
            </p>
          </div>
      </>
    )
  }

  function vanOutlet(van) {
    return <Outlet context={[van]} />
  }

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
          <Suspense fallback={<h2>Loading...</h2>}>
            <Await resolve={vanPromise.vanData}>
              {vanPage}
            </Await>
          </Suspense>
          
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
        <Suspense fallback={<h2>Loading...</h2>}>
            <Await resolve={vanPromise.vanData}>
              {vanOutlet}
            </Await>
          </Suspense>
        
      </div>
    </>
  );
}

export default HostVanLayout;
