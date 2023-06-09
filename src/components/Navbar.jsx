import React, { useState, useEffect, Suspense, lazy } from 'react'
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';



export const Navbar = () => {

const [toggleOn, settoggleOn] = useState(false)


const toggleMenu = () => {

  settoggleOn(!toggleOn)

  console.log(toggleOn)


}

const toggle = `togglingOff ${toggleOn ? "togglingMenu" : ""}`




return (

    <>


      <nav className="navbar">

 <h2 id="logo" className="">

Rosa Gutierrez & Asoc
      
        </h2>


        <ul>
          <li className="nav-item"> <a  href="#home"  >  Home</a></li>
          <li className="nav-item"> <a href="#us"  >  Nosotros</a></li>
          <li className="nav-item"> <a href="#reviews"  >  Reviews</a></li>
          <li className="nav-item"> <a href="#contact" >  Contacto</a></li>

        <button>Consulta Gratis</button>
        </ul>



      </nav>


      <nav className="phoneNavbar">


<div className="menu" onClick={toggleMenu}> 
<i className="bi bi-list"></i>
</div>



<h2 className="">

Rosa Gutierrez & Asoc
     
       </h2>


     </nav>


     <div className={`togglingMenu ${toggleOn ? " active" : ""}`}>
     <ul>
          <li className="nav-item"> <a  href="#home"  >  Home</a></li>
          <li className="nav-item"> <a href="#us"  >  Nosotros</a></li>
          <li className="nav-item"> <a href="#reviews"  >  Reviews</a></li>
          <li className="nav-item"> <a href="#contact" >  Contacto</a></li>

        <button>Consulta Gratis</button>
        </ul>

     </div>



    </>

  )
}
