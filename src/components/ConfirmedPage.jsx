import React from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom'
const ConfirmedPage = () => {
    const nav = useNavigate();

    function toMain(){
        nav("/")
    }
  return (<>
    <div>
        <img className='confirmed' src='https://gifdb.com/images/high/funny-thank-you-jimmy-fallon-fxbourgj6qcfvwl3.gif' width={1000} alt="Thanks"/>
        
    </div>
    <div><button onClick={toMain}>
        Start Over
    </button>
    </div>
    </>
  )
}

export default ConfirmedPage;