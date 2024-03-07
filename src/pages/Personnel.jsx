import React from 'react'
import { useState , useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
const Personnel = () => {
  const navigate=useNavigate()
  const [people,setPeople]=useState([])
  const getPeople = () =>{
    fetch("https://reqres.in/api/users")
    .then((res)=>res.json())
    .then((data)=>setPeople(data.data))
    .catch((err)=>console.log(err));
  };
  useEffect(() => {
    getPeople();
  }, []);
  
  return (
    <div className='personnelWrapper'>
      <h1>Personnel List</h1>
      <div className='cardWrapper'>
        {people.map((person)=>{
          const {id,first_name,last_name,avatar}=person
          return(
            <div className="personnelCard" key={id}>
              <img src={avatar} alt='img'/>
              <p>{first_name} {last_name}</p>
              <button onClick={()=>navigate(`/personnel/${id}`,{state:person})}>Details</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Personnel