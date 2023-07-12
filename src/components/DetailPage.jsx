import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

const DetailPage = () => {
    const {id} = useParams();
    const[item, setItem] = useState({});
    const nav = useNavigate();

    useEffect(() => {
        fetchHotelData();
      });
    
      const fetchHotelData = async () => {
        try {
          const response = await fetch(`http://localhost:8080/hotels/add/${id}`);
          const data = await response.json();
          setItem(data);
        } catch (error) {
          console.log('Error fetching hotel data:', error);
        }
      };

      function toBook(id){
        nav(`/bookForm/${id}`);
      }

return (<>

    <div class="card" style={{maxWidth:"500px", display:"flex",flexWrap:'wrap', marginLeft:"35%"}}>
  <img src={item.imageLink} class="card-img-top" alt="bigphoto"/>
  <div class="card-body">
    <h5 class="card-title">{item.name}</h5>
    <p class="card-text">{item.longDescription}</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">{item.experience}</li>
    <li class="list-group-item">{item.pool  ? "pool is there" : "pool isnt there"}</li>
    <li class="list-group-item">{item.price}</li>
  </ul>
  <div class="card-body">
  <button onClick={()=> toBook(item.id)}>Book now</button>
  </div>
  <li class="list-group-item" style={{marginLeft:"10px"}}>
  <a href="/" class="card-link">Back to Main Page</a>
  </li>
</div>
</>
  )
}

export default DetailPage