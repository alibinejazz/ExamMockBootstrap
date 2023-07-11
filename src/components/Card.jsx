import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Card = () => {
  const [hotels, setHotels] = useState([]);

  const nav = useNavigate();

  useEffect(() => {
    const fetchUserData = () => {
      fetch("https://mocki.io/v1/6756a93f-6a4d-4f7d-b0aa-d52eedaf7089")
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

  function toBook(){
    nav("/bookForm");
  }

  return (
    <div>
      {hotels.map((hotel, index) => (
        <div key={index} className="card mb-2" style={{ maxWidth: "100%" }}>
          <div className="row g-0">
            <div className="col-md-4">
              <img src={hotel.image_link} className="img-fluid rounded-start" alt={hotel.name} width={100} />
            </div>
            <div className="col-md-8">
              <div className="card-body">
                
                <h5 className="card-title">{hotel.name}</h5>
                <p className="card-text">{hotel.short_description}</p>
                <p className="card-text">{hotel.location}</p>
                
                <p className="card-text">{hotel.pool ? "yes, pool is there" : "no, pool is not there"}</p>
                <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                <button onClick={toBook}>Book it</button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
