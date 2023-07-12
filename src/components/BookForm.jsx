import React from 'react'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';


const BookForm = () => {

  const {id} = useParams();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [arrDate, setArrDate] = useState('');
    const [depDate, setDepDate] = useState('');
    const [pricePerNight, setPricePerNight] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0)

    const nav = useNavigate();

    useEffect(() => {
      if (arrDate && depDate) {
        const daysCount = Math.floor(
          (new Date(depDate) - new Date(arrDate)) / (1000 * 3600 * 24)
        );
  
        if (new Date(depDate) < new Date(arrDate)) {
          setTotalPrice(0);
        } else {
          fetch(`http://localhost:8080/hotels/add/${id}`)
            .then(response => response.json())
            .then(data => {
              const calculatedPricePerNight = data.price;
              setPricePerNight(calculatedPricePerNight);
              const calculatedPrice = calculatedPricePerNight * daysCount;
              const totalPriceWithTax = calculatedPrice + calculatedPrice * 0.12;
              setTotalPrice(totalPriceWithTax.toFixed(2));
            })
            .catch(error => {
              console.error('Error fetching price:', error);
              // Handle the error gracefully
            });
        }
      }
    }, [arrDate, depDate, id]);
  
    function handleSubmit(e) {
      e.preventDefault();
  
      if (new Date(depDate) < new Date(arrDate)) {
        alert('Please select correct dates');
        return;
      }
  
      const formData = {
        name: name,
        email: email,
        arrivalDate: arrDate,
        departureDate: depDate,
        totalPrice:totalPrice,
        hotelId:id,
      };
  
      fetch('http://localhost:8081/traveler/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      })
        .then(response => response.json())
        .then(data => {
          // Handle the response or perform additional actions
          console.log('Data posted:', data);
          
        })
        .catch(error => {
          console.error('Error posting data:', error);
          // Handle the error gracefully
        });
        nav('/confirmedbooking');
    }
    function toMain(){
        nav("/")
    }
  return (
    <div>
      <form style={{width:"50%", display:"flex", flexDirection:"column", marginLeft:"25%", marginTop:"203px"}} onSubmit={handleSubmit}>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={name} onChange={(e)=> setName(e.target.value)} required/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Email</label>
    <input type="email" class="form-control" id="exampleInputPassword1" value={email} onChange={(e)=> setEmail(e.target.value)} required/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Address</label>
    <input type="address" class="form-control" id="exampleInputPassword1" value={address} onChange={(e)=> setAddress(e.target.value)} required/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Arrivate Date</label>
    <input type="date" class="form-control" id="exampleInputPassword1" value={arrDate} onChange={(e)=> setArrDate(e.target.value)}required/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Departure Date</label>
    <input type="date" class="form-control" id="exampleInputPassword1" value={depDate} onChange={(e)=> setDepDate(e.target.value)} required/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Price(Per night)</label>
    <input class="form-control" id="exampleInputPassword1" value={pricePerNight}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Total Price(Inclusive Tax)</label>
    <input class="form-control" id="exampleInputPassword1" value={totalPrice}/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  <button class="btn btn-primary" style={{marginLeft: "10px"}} onClick={toMain}>Cancel</button>
</form>
    </div>
  )
}

export default BookForm
