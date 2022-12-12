import React from 'react'
import { Container,Row,Col,Form,FormGroup } from 'reactstrap';
import {Helmet} from '../components/Helmet/Helmet';
import CommonSection from '../components/Ul/CommonSection'
import '../styles/checkout.css'
import {useSelector} from 'react-redux'
import { Link } from 'react-router-dom';

const Checkout = () => {
  const totalQty = useSelector(state=>state.cart.totalQuantity)
  const totalAmount = useSelector(state=>state.cart.totalAmount)
 
  return (
    <Helmet title="Checkout">
            <CommonSection title="Checkout" />
             <section>
              <Container>
              <Row>
                  <Col lg='8'>
                     <h6 className='mb-4 fw-bold'>Billing Information</h6>
                  <Form className='billing_form'>
                  <FormGroup className='from_group'>
                       <input type="text" placeholder='Enter your name' />
                     </FormGroup>

                     <FormGroup className='from_group'>
                       <input type="email" placeholder='Enter your email' />
                     </FormGroup>
                     <FormGroup className='from_group'>
                       <input type="number" placeholder='Enter your phone number' />
                     </FormGroup>
                     <FormGroup className='from_group'>
                       <input type="text" placeholder='City' />
                     </FormGroup>
                     <FormGroup className='from_group'>
                       <input type="text" placeholder='Postal Code' />
                     </FormGroup>
                     <FormGroup className='from_group'>
                       <input type="text" placeholder='Country' />
                     </FormGroup>
                  </Form>
                  
                  </Col>
                  <Col lg='4'>
                     <div className="checkout_cart">
                       <h6>Total Qty :<span>0{totalQty}</span></h6>
                       <h6>Subtotal:<span>Tk. {totalAmount}</span></h6>
                       <h6>
                        <span>Shipping :<br/> free shipping</span>
                        <span>Tk.0</span>
                        </h6>
                      
                       <h4>Total Cost :<span>Tk.{totalAmount}</span></h4>
                       <button  className='buy_auth_btn w-100'> <Link to="/login">Place an order</Link></button>
                     </div>
                    
                  </Col>
              </Row>
              </Container>
             </section>
       
    </Helmet>
  )
}

export default Checkout