import React from 'react'
import { Navbar } from '../components/Navbar'
import SliderReviews from '../components/SliderReviews'

const Home = () => {
  return (
<main>
<Navbar/>


<section>


<div className="frontPage">
<a id="home" href=""></a>

<div className="opacity ">

<h1>ASESORIA LEGAL PARA TI Y TUS NEGOCIOS</h1>
<h3>ayudamos a las empresas a navegar por el panorama legal y hacer crecer sus operaciones</h3>
</div>


</div>


<div className="experience">


<div>   
     <h4>20+</h4>

<p> anos de experiencias incorporados legal de negocios</p>

</div>
<div id="hundred">  <h4>100+</h4>

<p> anos de experiencias incorporados legal de negocios</p>
</div>
<div>  <h4>100%</h4>

<p> anos de experiencias incorporados legal de negocios</p>
</div>


</div>


<a id="us" href=""></a>

<div  className="us">

<div className="firtsPart">

<div className="photo">

 <aside></aside>

</div>


<div className="clientSaftly">

    <h3>Mas de Nosotros</h3>
    <h5>CUIDAMOS DE NUESTROS CLIENTES</h5>

    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis distinctio quo et. Eos dicta id soluta sed eaque vel velit inventore ad eum, tenetur suscipit iste nobis quod! Amet, at!</p>

<p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis magni illum officiis quia, perferendis natus! Recusandae ab sunt mollitia omnis nobis iste similique explicabo, repellat aperiam vero ut at debitis.</p>

<button>Leer Mas</button>
</div>



</div>

<div className="secondPart">

    <h5>QUE HACEMOS?</h5>
    <h6>ESTAMOS ESPECIALIZADOS EN</h6>


    <ul className="especialization">

    <li className="card"> <h3><div className=""><span>C</span>ORPORATE LAW</div> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt incidunt itaque assumenda voluptatum hic consectetur in, numquam vero, dolores natus tempora porro quis provident. Hic facilis cumque porro maxime! Atque.</p> <button>Mas</button></h3></li>
    <li className="card"> <h3><div className=""><span>C</span>ORPORATE LAW</div> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt incidunt itaque assumenda voluptatum hic consectetur in, numquam vero, dolores natus tempora porro quis provident. Hic facilis cumque porro maxime! Atque.</p> <button>Mas</button></h3></li>
    <li className="card"> <h3><div className=""><span>C</span>ORPORATE LAW</div> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt incidunt itaque assumenda voluptatum hic consectetur in, numquam vero, dolores natus tempora porro quis provident. Hic facilis cumque porro maxime! Atque.</p> <button>Mas</button></h3></li>

    </ul>
</div>


</div>


<div className="consult">

  <h4>Necesitas una consulta?</h4>

  <p>Te proporcionamos una consulta gratis para tus problemas legales</p>

  <button>Contactanos</button>

</div>


<a id="reviews" href=""></a>

<div  className="reviews">
<h5>REVIEWS</h5>
<h6>Que dicen nuestros clientes de nosotros?</h6>
<SliderReviews/>
</div>




<a id="contact" href=""></a>
<div  className="formulario">

  {/* <div className="opacity"></div> */}

  <h5 >Contacto</h5>

  <strong>Solicitar una Consulta Gratis</strong>

  <form action="">

  <input type="text" placeholder="Name" />

  <input type="email" placeholder="Email" />

  <textarea name="" id="" cols="30" rows="10" placeholder="Mensaje"></textarea>

<input type="submit" placeholder="Enviar" />



  </form>

</div>


<div className="contact">

<ul className="information">

<li className=""> <div className="info"><i class="bi bi-house-down"></i> </div> <h6>Direccion</h6><p>licey al Medio santiago</p> </li>
<li className="gmail"> <div className="info"><i class="bi bi-envelope-at-fill"></i></div> <h6>Email</h6><p>rosamargaritagutierrezporte <br />@gmail.com</p> </li>
<li className=""> <div className="info"><i class="bi bi-telephone-fill"></i></div> <h6>Telefono</h6><p>809-858-5511</p> </li>
<li className=""> <div className="info"><i class="bi bi-clock"></i></div> <h6>Horario</h6><p>lunes a Viernes <br /> 9:00 am a 5:00 pm</p> </li>

</ul>
</div>

</section>






</main>  )
}

export default Home