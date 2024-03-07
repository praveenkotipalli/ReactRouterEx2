import React, { useState } from 'react'

const COntact = () => {
    const [firstName,setFirstName]=useState("");
    const [lastName,setLastName]=useState("");
    const [email,setEmail]=useState("");
    const handleSubmit = (e) =>{
        e.preventDefault();
        const message= `FirstName: ${firstName}\nSecondName: ${lastName}\nEmail: ${email}`;
        alert(message);
        setFirstName("");
        setLastName("");
        setEmail("");
    }
  return (
    <div className='contactWrapper'>
        <h1>Contact</h1>
        <form onSubmit={handleSubmit} className='formWrapper'>
            <div className='infoWrapper'>
                <label htmlFor='firstName'>FirstName:</label>
                <input type='text' id='firstName' value={firstName} onChange={(e)=>setFirstName(e.target.value)}/>
            </div>
            <div className='infoWrapper'>
                <label htmlFor='lasttName'>Last Name:</label>
                <input type='text' id='lastName' value={lastName} onChange={(e)=>setLastName(e.target.value)}/>
            </div>
            <div className='infoWrapper'>
                <label htmlFor='email'>Email:</label>
                <input type='text' id='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            </div>
            <div className='infoWrapper'>
                <button style={{cursor:"pointer"}} type='submit'>Submit</button>
            </div>
            
        </form>
    </div>
  )
}

export default COntact