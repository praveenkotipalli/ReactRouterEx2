import React from 'react'
import error from "../img/errornotfoundlogo.jpg"
import { useNavigate } from 'react-router-dom'
const NotFound = () => {
  const navigate=useNavigate();
  return (
    <div className='errorWrapper'>
      
        <img src={error} alt='errorImg'/>
        <div className="btnWrapper">
      <button onClick={()=>navigate("/")}>Home</button>
      <button onClick={()=>navigate(-1)}>Go Back</button>
      </div>
    </div>
  )
}

export default NotFound