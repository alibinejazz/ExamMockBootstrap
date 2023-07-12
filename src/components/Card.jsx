import React, { useState, useEffect } from 'react';
import { useNavigate, Link} from 'react-router-dom';

const Card = () => {
  const [hotels, setHotels] = useState([]);
  const nav = useNavigate();

  useEffect(() => {
    const fetchUserData = () => {
      fetch("http://localhost:8080/hotels/getall")
        .then(response => response.json())
        .then(data => {
          setHotels(data);
        })
        .catch(error => {
          console.log(error);
        });
    };

    fetchUserData();
  }, []);

  function toBook(id){
    nav(`/bookForm/${id}`);
  }



  return (
    <div>
      {hotels.map((hotel) => (
        <div key={hotel.id} className="card mb-2" style={{ maxWidth: "50%", marginLeft:"450px", border:"5px solid black" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={hotel.imageLink} className="img-fluid rounded-start" alt={hotel.name} width={400}/>
            </div>
            <div className="col-md-6">
              <div className="card-body">
                
                <h5 className="card-title"><Link to={`/detailPage/${hotel.id}`}>{hotel.name}</Link></h5>
                <p>{hotel.shortDescription}</p>
                <p className="card-text">{hotel.location}</p>
                
                <p className="card-text">{hotel.pool ? "yes, pool is there" : "no, pool is not there"}</p>
                <button onClick={()=>toBook(hotel.id)}>Book it</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
