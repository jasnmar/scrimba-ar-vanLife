import "./Vans.css"
import { useState, useEffect } from "react"
import Van from "../../components/Van/Van"
import Badge from "../../components/Badge/Badge"
import Filter from "../../components/Filter/Filter"

/**
 * Challenge: Fetch and map over the data to display it on
 * the vans page. For an extra challenge, spend time styling
 * it to look like the Figma design.
 * 
 * Hints:
 * 1. Use `fetch("/api/vans")` to kick off the request to get the
 *    data from our fake Mirage JS server
 * 2. What React hook would you use to fetch data as soon as the
 *    Vans page loads, and only fetch it the one time?
 * 3. You may get an error saying "console.groupCollapsed is not
 *    a function". You can ignore it for now.
 */

async function getData() {
  const res = await fetch("api/vans")
  const data = await res.json()
  return await data.vans
} 

function Vans() {
  const [vans, setVans] = useState();

  useEffect(() => {
    const fetchData = async () => { 
      const vansData = await getData();
      setVans(vansData); 
    };
    fetchData(); 
  }, []);


  let vanList
  if (vans) {
    vanList = vans.map((van) => {
      return <Van key={van.id} data={van} />;
    });
  }

  return (
    <>
      <div className="vans--vans-main">
        <h1>Explore our van options</h1>
        <div className="vans--filter-bar">
          <Filter />

          <button className="vans--filter-btn">Clear Filters</button>
        </div>
        <div className="vans--vanlist">
          {vanList}
        </div>
      </div>
    </>
  )
}

export default Vans


// [
//   {
//       "id": "1",
//       "name": "Modest Explorer",
//       "price": 60,
//       "description": "The Modest Explorer is a van designed to get you out of the house and into nature. This beauty is equipped with solar panels, a composting toilet, a water tank and kitchenette. The idea is that you can pack up your home and escape for a weekend or even longer!",
//       "imageUrl": "https://assets.scrimba.com/advanced-react/react-router/modest-explorer.png",
//       "type": "simple"
//   },
//   {
//       "id": "2",
//       "name": "Beach Bum",
//       "price": 80,
//       "description": "Beach Bum is a van inspired by surfers and travelers. It was created to be a portable home away from home, but with some cool features in it you won't find in an ordinary camper.",
//       "imageUrl": "https://assets.scrimba.com/advanced-react/react-router/beach-bum.png",
//       "type": "rugged"
//   },
//   {
//       "id": "3",
//       "name": "Reliable Red",
//       "price": 100,
//       "description": "Reliable Red is a van that was made for travelling. The inside is comfortable and cozy, with plenty of space to stretch out in. There's a small kitchen, so you can cook if you need to. You'll feel like home as soon as you step out of it.",
//       "imageUrl": "https://assets.scrimba.com/advanced-react/react-router/reliable-red.png",
//       "type": "luxury"
//   },
//   {
//       "id": "4",
//       "name": "Dreamfinder",
//       "price": 65,
//       "description": "Dreamfinder is the perfect van to travel in and experience. With a ceiling height of 2.1m, you can stand up in this van and there is great head room. The floor is a beautiful glass-reinforced plastic (GRP) which is easy to clean and very hard wearing. A large rear window and large side windows make it really light inside and keep it well ventilated.",
//       "imageUrl": "https://assets.scrimba.com/advanced-react/react-router/dreamfinder.png",
//       "type": "simple"
//   },
//   {
//       "id": "5",
//       "name": "The Cruiser",
//       "price": 120,
//       "description": "The Cruiser is a van for those who love to travel in comfort and luxury. With its many windows, spacious interior and ample storage space, the Cruiser offers a beautiful view wherever you go.",
//       "imageUrl": "https://assets.scrimba.com/advanced-react/react-router/the-cruiser.png",
//       "type": "luxury"
//   },
//   {
//       "id": "6",
//       "name": "Green Wonder",
//       "price": 70,
//       "description": "With this van, you can take your travel life to the next level. The Green Wonder is a sustainable vehicle that's perfect for people who are looking for a stylish, eco-friendly mode of transport that can go anywhere.",
//       "imageUrl": "https://assets.scrimba.com/advanced-react/react-router/green-wonder.png",
//       "type": "rugged"
//   }
// ]