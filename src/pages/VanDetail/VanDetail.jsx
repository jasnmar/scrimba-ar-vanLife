import { useEffect, useState } from 'react'
import './VanDetail.css'
import { Link, useParams } from 'react-router-dom'
import Badge from '../../components/Badge/Badge'

async function getData(id) {
  const res = await fetch(`/api/vans/${id}`)
  const data = await res.json()
  console.log('data: ', data)
  return data
}


function VanDetail() {
  const [vanData, setVanData] = useState()
  const params = useParams()
  console.log('params: ', params)

  useEffect(() => {
    const fetchData = async () => { 
      const vanInfo = await getData(params.id);
      setVanData(vanInfo.vans); 
    };
    fetchData(); 
  },[params.id]);

  console.log('vanData: ', vanData)
  if(vanData) {
    return (
      <div className='vandetail--main'>
        <div className='vandetail--link'>
          <Link to="\vans">	&larr; Back to all vans</Link>
        </div>
        <img className="vandetail--van-image" src={vanData.imageUrl}></img>
        <div className='vandetail--bottom-text'>
          <div className='vandetail--badge'>
          <Badge label={vanData.type} styled={true}></Badge>
          </div>
          <p className='vandetail--title'>{vanData.name}</p>
          <p className='vandetail--price'>${vanData.price}<span className='vandetail--day'>/day</span></p>
          <p className='vandetail--description'>{vanData.description}</p>
        </div>
      </div>
    )

  }
}


export default VanDetail

