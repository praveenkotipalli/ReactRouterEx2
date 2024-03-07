import { useEffect, useState } from "react";
import {useParams,useNavigate } from "react-router-dom"
import NotFound from "./NotFound";
const PersonnelDetail = () => {
   const {id} =useParams();
  // const {state:person}=useLocation();
  const [person,setPerson]=useState("")
  const [error,setError]=useState(false)
  const [loading,setLoading]=useState(true)
  const navigate=useNavigate();
  // console.log(id);
  // console.log(state);

  
  useEffect(() => {
    fetch(`https://reqres.in/api/users/${id}`)
    .then((res)=>{
      if(!res.ok){
        setLoading(false);
        setError(true);
        throw new Error("Something Went Wrong")
      }
      return res.json()
    })
    .then((data)=>{
      setLoading(false)
      setPerson(data.data)
    })
    .catch((err)=>console.log(err));
  }, []);
  


  if(error){
    return <NotFound/>
  }

  if(loading){
    return(
      <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        <h3>Data Loading</h3>
      </div>
    );
  }


  if(!error && !loading){
    return (
      <div className="personWrapper">
        <h3>{person?.first_name} {person?.last_name}</h3>
        <img src={person?.avatar} alt="img"/>
        <p>{person?.email}</p>
        <div className="btnWrapper">
        <button onClick={()=>navigate("/")}>Home</button>
        <button onClick={()=>navigate(-1)}>Go Back</button>
        </div>
      </div>
    )
  }



  
}

export default PersonnelDetail