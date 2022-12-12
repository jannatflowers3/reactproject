import React from 'react'
import { Container,Row,Col } from 'reactstrap'
export default function Login() {
  return (
    <>
 <h1 classNameName='text-center text-success m-5'>User Login</h1>
 .   <section>
<Container>
    <Row classNameName='justify-content-center'>
        <Col lg="8">
<div className="mb-3 row">
    <label for="email" className="col-sm-2 col-form-label">Email address</label>
    <div className="col-sm-10">
      <input type="email" className="form-control" id="email" placeholder='enter your email'/>
    </div>
  </div>


  <div className="mb-3 row">
    <label for="password" className="col-sm-2 col-form-label">Password</label>
    <div className="col-sm-10">
      <input type="password" className="form-control" id="password" placeholder='enter your  password'/>
    </div>
  </div>
  <input  type="button" classNameName='btn btn-primary' value="REGISTER"/>
        </Col>
    </Row>
</Container>
 </section>

    </>
  )
}
