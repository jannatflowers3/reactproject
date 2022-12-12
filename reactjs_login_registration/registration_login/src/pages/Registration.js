import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Container,Row,Col } from 'reactstrap'
import { useState } from 'react'
import  axios from 'axios'
export default function Registration() {
const navigate = useNavigate()

const [info,setInfo]=useState({});
const changeValue = (e)=>{
    setInfo({...info,[e.target.name]:e.target.value});

};
const formSubmit = (e)=>{
    e.preventDefault();
    axios.post("http://localhost/React_project/reactjs_login_registration/registration_login/api/registration.php",
    info
    )
    .then((result)=>{
        if(result.data){
            // console.log("yes")
             console.log(result.data)

        }
    });
}
console.log(info)
  return (
    <>
    <h1 className='text-center text-success m-5'>User Registration</h1>
 <section>
<Container>
    <Row className='justify-content-center'>
        <Col lg="8">
        <form onSubmit={formSubmit}>
        <div className="mb-3">
  <label for="fname" className="form-label">First Name</label>
  <input type="text" className="form-control" id="name" name="fname" onChange={changeValue} placeholder="enter your first name"/>
</div>
<div className="mb-3">
  <label for="lname" className="form-label">Last Name</label>
  <input type="text" className="form-control" id="name" name="lname" onChange={changeValue}  placeholder="enter your last name"/>
</div>
<div className="mb-3">
  <label for="email" className="form-label">Email address</label>
  <input type="email" className="form-control" id="email"name='email' 
  onChange={changeValue}  placeholder="enter your email"/>
</div>
<div className="mb-3">
  <label for="password" className="form-label">Password</label>
  <input type="password" className="form-control" id="password"  name ="password"
   onChange={changeValue}  placeholder="enter your password"/>
</div>
<input  type="submit" classNameName='btn btn-primary' value="REGISTER"/>
        </form>
        </Col>
    </Row>
</Container>
 </section>
    </>
  )
}
