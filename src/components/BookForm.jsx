import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';


const BookForm = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [arrDate, setArrDate] = useState('');
    const [depDate, setDepDate] = useState('');

    const nav = useNavigate();

    function toMain(){
        nav("/")
    }
  return (
    <div>
      <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label">Name</label>
    <input type="name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={name} onChange={(e)=> setName(e.target.value)}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Email</label>
    <input type="email" class="form-control" id="exampleInputPassword1" value={email} onChange={(e)=> setEmail(e.target.value)}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Address</label>
    <input type="address" class="form-control" id="exampleInputPassword1" value={address} onChange={(e)=> setAddress(e.target.value)}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Arrivate Date</label>
    <input type="date" class="form-control" id="exampleInputPassword1" value={arrDate} onChange={(e)=> setArrDate(e.target.value)}/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Departure Date</label>
    <input type="date" class="form-control" id="exampleInputPassword1" value={depDate} onChange={(e)=> setDepDate(e.target.value)}/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
  <button class="btn btn-primary" style={{marginLeft: "10px"}} onClick={toMain}>Cancel</button>
</form>
    </div>
  )
}

export default BookForm
