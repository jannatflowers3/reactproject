import React from 'react'
import { Link } from 'react-router-dom'
export default function Header() {
  return (
    <>
<div class="p-5 bg-primary text-white text-center">
  <h1>My First Bootstrap 5 Page</h1>
  <p>Resize this responsive page to see the effect!</p> 
</div>

<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
  <div class="container-fluid">
    <ul class="navbar-nav">
      <li class="nav-item">
        <Link to ="/" class="nav-link active" >Home</Link>
      </li>
      <li class="nav-item">
      <Link to ="/about"class="nav-link" >About</Link>
      </li>
      <li class="nav-item">
      <Link to ="/contact"  class="nav-link" >Contact</Link>
      </li>
      <li class="nav-item">
      <Link to ="/login"  class="nav-link" >Login</Link>
      </li>
      <li class="nav-item">
      <Link to ="/registration"  class="nav-link" >Registration</Link>
      </li>
      
    </ul>
  </div>
</nav>

    </>
  )
}
