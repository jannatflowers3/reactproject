import React,{useRef,useEffect} from 'react'
import './header.css'
import {Container,Row} from "reactstrap"
import { NavLink ,useNavigate} from 'react-router-dom'
import {motion} from 'framer-motion'
import logo from '../../assets/images/eco-logo.png'
import userIcon from '../../assets/images/user-icon.png'
import { useSelector } from 'react-redux'
const nav_links = [
   { path:'home',
    display:'Home'},
    {
        path:'shop',
        display:'Shop'
    },
    {
        path:'cart',
        display:'Cart'
    },
    {
        path:'login',
        display:'Login'
    }
]
export const Header = () => {

    const headerRef = useRef(null);

    const totalQuantity = useSelector(state =>state.cart.totalQuantity)

const menuRef = useRef(null);
const navigate = useNavigate()

    const stickyHeaderFunc = ()=>{
        window.addEventListener('scroll',()=>{
            if(
                document.body.scrollTop>80 ||document.documentElement.scrollTop>80){
                headerRef.current.classList.add("sticky_header");
            }
            else{
                headerRef.current.classList.remove("sticky_header"); 
            }
        });
    };
    useEffect(()=>{
        stickyHeaderFunc()
        return ()=>window.removeEventListener('scroll',stickyHeaderFunc);
    })

    const menuTaggle = ()=>menuRef.current.classList.toggle('active_menu');
const navigatetoCart = ()=>{
navigate('/cart');
}

  return (
    <header className='header' ref={headerRef}>
<Container>
    <Row>
        <div className='nav_wraper'>
            <div className="logo">
                <img src={logo} alt="logo"/>
                <div>
                    <h1>ExpressShop</h1>
                </div>
            </div>
                    <div className="navigation" ref={menuRef} onClick={menuTaggle}>
                        <ul className='menu'>
                        {
                            nav_links.map((item,index)=>(
                                <li className='nav_item' key={index}>
                        <NavLink to={item.path} className={(navClass)=>navClass.isActive?"nav_active":""}> {item.display}</NavLink>
                            </li> 
                            )) }    
                        </ul>
                     </div>
                        <div className="nav_icon">
                            <span className='fav_icon'>
                                <i class="ri-heart-line"></i>
                                <span className='badge'> 2</span>
                                </span>
                            <span className='cart_icon' onClick={navigatetoCart}>
                            <i class="ri-shopping-bag-line"></i>
                            <span className='badge'>{totalQuantity}</span>
                            </span>
                            <span>
                                < motion.img whileTap={{scale:1.2}} src = {userIcon} alt='usericon' />  </span>
                        
                            <div className="mobile_menu">
                                <span onClick={menuTaggle}> <i class="ri-menu-line"></i>
                               
                                </span>
                            </div>
                        </div>
         </div>
    </Row>
</Container>
    </header>
  )
}

