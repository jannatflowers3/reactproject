
import PropTypes from 'prop-types';
import React, { useState } from 'react';

async function loginUser(credentials) {
    return fetch('http://localhost:8080/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(credentials)
    })
      .then(data => data.json())
   }

export default function Login({setToken}) {
  const [email,setEmail] = useState();  
  const [password,setPassword] = useState(); 
  
  const handleSubmit = async e => {
    e.preventDefault();
    const token = await loginUser({
        email,
        password
    });
    setToken(token);
  }
  return (
<div className=' loginform'>
<div className="container">
        <div className="row justify-content-center align-items-center g-2 mt-5">
            <div className="col-lg-8 ">
                <h1 className='text-center text-white bg-success fs-2 p-5 mb-5'>Login Form</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label for="exampleInputEmail1" className="form-label">Email address</label>
                    <input type="email" className="form-control" onChange={(e)=>setEmail(e.target.value)} id="exampleInputEmail1" aria-describedby="emailHelp"/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label for="exampleInputPassword1" onChange={(e)=>setPassword(e.target.value)} className="form-label">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"/>
                </div>
                <div className="mb-3 form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                    <label className="form-check-label" for="exampleCheck1">Check me out</label>
                </div>
                <button type="submit" className="btn btn-primary">Login</button>
                </form>
            </div>
            
        </div>
       </div>
</div>
       
  );
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
  }