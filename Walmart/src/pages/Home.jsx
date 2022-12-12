import React,{useState,useEffect} from 'react';
import { Helmet } from '../components/Helmet/Helmet';
import { Container,Row,Col } from 'reactstrap';
import heroimg from '../assets/images/hero-img.png';
import  '../styles/home.css'
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Services } from '../services/Services';
import products from '../assets/data/products'
import ProductsList from '../components/Ul/ProductsList';
import counterImg from '../assets/images/counter-timer-img.png'
import Clock from '../components/Ul/Clock';
export default function Home() {
  const year = new Date().getFullYear();

  const [trendingProducts,setTrendingProducts]=useState([])
  const [bestSalesProducts,SetbestSalesProducts]=useState([])
  const [mobileProducts,SetbestMobileProducts]=useState([])
  const [wirelesseProducts,SetbestWirelessProducts]=useState([])
  const [popularProducts,SetbestPopularProducts]=useState([])
  
useEffect(()=>{
  const filterdTrendingdProducts = products.filter(
    (item)=>item.category ==="chair");

    const filterebestSalesProducts = products.filter(
      (item)=>item.category ==="sofa");
      const filterdMobileProducts = products.filter(
        (item)=>item.category ==="mobile");

        const filterdWirelessProducts = products.filter(
          (item)=>item.category ==="wireless");

          const filterdPopularProducts = products.filter(
            (item)=>item.category ==="watch");
        
    setTrendingProducts(filterdTrendingdProducts);
    SetbestSalesProducts(filterebestSalesProducts);
    SetbestMobileProducts(filterdMobileProducts);
    SetbestWirelessProducts(filterdWirelessProducts);
    SetbestPopularProducts(filterdPopularProducts);
},[]);

  return(
    <Helmet title = {"Home"}> 
    <section className='hero_section'>
      <Container>
        <Row>
          <Col lg='6' md="6">
            <div className='hero_content'>
              <p className='hero_subtitle'> Trending Product in {year}</p>
              <h2>Make YOur Interior More Minimalistic & Moern</h2>
              <p>ExpressShop Find the Right Purchase Indoor Outdoor Furniture Manufacturer in China.

              </p>
              <motion.button whileTap ={{scale:1.2}} className='buy_btn'> <Link to="/shop">SHOP NOW</Link>
           </motion.button>
            </div>
          </Col>
          <Col lg='6' md='5'>
          <div className="hero_img">
              <img src={heroimg} alt="bannderimg"/>
          </div>
          </Col>
        </Row>
      </Container>

    </section>
    <Services />
    <section className='trending_products'>
      <Container>
        <Row>
           <Col lg="12" className='text-center'>
           <h2 className='section_title'>Trending Productss</h2>
            </Col>
            <ProductsList  data={trendingProducts}/>  
        </Row>
      </Container>
    </section>

  <section className="best_sales">
    <Container>
      <Row>
        <Col lg="12" className='text-center'>
          <h2 className='section_title'>Best Sales</h2>
        </Col>
        <ProductsList data={bestSalesProducts}/>
      </Row>
    </Container>
  </section>

  <section className="timer_count">
    <Container>
      <Row>
        <Col lg='6' md='12' className='count_down'>
          <div className="clock_top_content">
            <h4 className='text-white fs-6 mb-2'>Limited Offers</h4>
            <h3 className='text-white fs-6 mb-3'>Quality Armchair</h3>
          </div>
          <Clock />
          <motion.button  whileTap={{scale:1.2}} className='buy_btn store_btn'>
            <Link to ="/shop"> Visit Store</Link>
          </motion.button>
        </Col>
        <Col lg='6' md='12' className='text-end counter_img'>
          <img   src={counterImg} alt='Countimg'/>
        </Col>
      </Row>
    </Container>
  </section>

<section className='new_arrivals mb-5'>
  <Container>
    <Row>
    <Col lg="12" className='text-center'>
          <h2 className='section_title'>New Arriable</h2>
        </Col>
        <ProductsList data={mobileProducts}/>
        <ProductsList data={wirelesseProducts}/>
    </Row>
  </Container>
</section>


<section className='popular_category mb-2'>
  <Container>
    <Row>
    <Col lg="12" className='text-center'>
          <h2 className='section_title'>Popular Category</h2>
        </Col>
        <ProductsList data={popularProducts}/>
       
    </Row>
  </Container>
</section>
    </Helmet>
  )

}
