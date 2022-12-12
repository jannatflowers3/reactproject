import React from 'react'
import './footer.css';
import { Container,Row,Col,ListGroup, ListGroupItem } from 'reactstrap';
import {Link} from "react-router-dom"
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='4' className='mb-4' md="6">
          <div className="logo">
                <div>
                    <h1 className='text-white'>ExpressShop</h1>
                </div> 
            </div>
            <p className="footer_text mt-5"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque eveniet beatae odio accusamus voluptate suscipit ipsum voluptates odit officiis placeat!
                </p>
          </Col>
          <Col lg='3' md="6" className='mb-4'>
                      <div className="footer_quick_link">
                        <h4 className="quick_links_title text-white">Top Categories</h4>
                      <ListGroup className='mb-3'>
                        <ListGroupItem className='ps-0 border-0'>
                          <Link to="#">Mobile Phones</Link>
                        </ListGroupItem>
                        <ListGroupItem className='ps-0 border-0'>
                          <Link to="#">Modern Sofa</Link>
                        </ListGroupItem>
                        <ListGroupItem className='ps-0 border-0'>
                          <Link to="#">Arm Chair</Link>
                        </ListGroupItem>
                        <ListGroupItem className='ps-0 border-0'>
                          <Link to="#">Smart Watch</Link>
                        </ListGroupItem>
                      </ListGroup>
                      </div>
          </Col>
          <Col lg='2' md="6"  className='mb-4'>
          <div className="footer_quick_link">
                        <h4 className="quick_links_title text-white">Useful Links</h4>
                      <ListGroup className='mb-3'>
                        <ListGroupItem className='ps-0 border-0'>
                          <Link to="/shop">Shop</Link>
                        </ListGroupItem>
                        <ListGroupItem className='ps-0 border-0'>
                          <Link to="/cart">Cart</Link>
                        </ListGroupItem>
                        <ListGroupItem className='ps-0 border-0'>
                          <Link to="/login">Login</Link>
                        </ListGroupItem>
                        <ListGroupItem className='ps-0 border-0'>
                          <Link to="/">Privacy Policy</Link>
                        </ListGroupItem>
                      </ListGroup>
                      </div>
          </Col>
          <Col lg="3" md="4">
          <div className="footer_quick_link">
                        <h4 className="quick_links_title text-white">Contact</h4>
                      <ListGroup className='footer_contact'>
                        <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                         <span><i class="ri-map-pin-line"></i></span>
                         <p>9/13 South kajla,Dhaka, Bangladesh</p>
                        </ListGroupItem>
                        <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                         <span><i class="ri-phone-line"></i></span>
                         <p>+013008765545</p>
                        </ListGroupItem>
                        <ListGroupItem className='ps-0 border-0 d-flex align-items-center gap-2'>
                        <span><i class="ri-mail-line"></i></span>
                         <p>jannatflowers3@gmail.com</p>
                        </ListGroupItem>
                      </ListGroup>
                      </div>
           </Col>
              <Col lg="12">
                <p className="footer_copyright">Copyright@ {year} developed by Jannatul Ferdaush.All rights reserved.</p>
              </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer