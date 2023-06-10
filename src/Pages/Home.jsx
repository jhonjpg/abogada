import React, { useState } from 'react'
import { Navbar } from '../components/Navbar'
import SliderReviews from '../components/SliderReviews'

const Home = () => {


  const [articulo, serArticulo] = useState(false);


  const seeMore = () => {



    serArticulo(!articulo)
  }

  const hideClass = `hide ${articulo ? "show" : ""}`



  const [firstArticulo, serFirstArticulo] = useState(false);
  const [secondArticulo, serSecondArticulo] = useState(false);
   const [thirdArticulo, serThirdArticulo] = useState(false);



  const watchMore = () => {
    serFirstArticulo(!firstArticulo)
  }


  const watchSecond = () => {
    serSecondArticulo(!secondArticulo)
  }


  const watchThird = () => {
    serThirdArticulo(!thirdArticulo)
  }
  const watch = `off ${firstArticulo ? "on" : ""}`
  const watchtwo = `offtwo ${secondArticulo ? "ontwo" : ""}`
  const watchthree = `offthree ${thirdArticulo ? "onthree" : ""}`


  





  return (
<main>
<Navbar/>


<section>

<a id="home" href=""></a>

<div className="frontPage">

<div className="opacity ">

<h1>ASESORIA LEGAL PARA TI Y TUS NEGOCIOS</h1>
<h3>ayudamos a las empresas a navegar por el panorama legal y hacer crecer sus operaciones</h3>
</div>


</div>


<div className="experience">

<div >  <h4>100+</h4>

<p> Problemas Legales Resueltos para Pequeños y Grandes Negocios</p>
</div>

<div id="hundred">   
     <h4>20+</h4>

<p> Años de Experiencias Incorporados Legal de Negocios</p>

</div>

<div>  <h4>97%</h4>

<p> Tasa de Exito en la Negociación de Acuerdos Favorables para el Cliente</p>
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

    <p>En nuestro despacho legal, nos enorgullece cuidar y proteger a nuestros valiosos clientes. Nos comprometemos a brindar un servicio legal excepcional, respaldado por años de experiencia y conocimientos especializados. Nuestro enfoque principal es garantizar el bienestar y la tranquilidad de aquellos que confían en nosotros para resolver sus asuntos legales.</p>

<p>Entendemos que cada cliente es único, y nos esforzamos por proporcionar un trato personalizado y atento a cada caso. Desde el momento en que nos eligen como sus representantes legales, nos dedicamos a escuchar y comprender sus necesidades individuales. Valoramos la confianza que depositan en nosotros y nos comprometemos a actuar en su mejor interés en todo momento.</p>

<p className={hideClass}> En resumen, en nuestro despacho legal, no solo protegemos los derechos legales de nuestros clientes, sino que también nos preocupamos por su bienestar general. Nuestra dedicación, ética de trabajo y enfoque centrado en el cliente nos distinguen como una opción confiable para todas sus necesidades legales. Permítanos cuidar de usted mientras trabajamos juntos para alcanzar los resultados legales que busca."</p>
<button onClick={seeMore}>{articulo ? "Menos": "leer Mas"}</button>
</div>



</div>

<div className="secondPart">

    <h5>QUE HACEMOS?</h5>
    <h6>ESTAMOS ESPECIALIZADOS EN</h6>


    <ul className="especialization">

    <li className="card"> <h3><div className=""> <br /><span>I</span>NMOBILIARIO</div> 
    <p>mi objetivo principal es brindar un servicio integral y de alta calidad a mis clientes en todas sus necesidades legales relacionadas con bienes raíces. Mi enfoque se basa en comprender las metas y objetivos de mis clientes, para poder ofrecer soluciones legales efectivas y adaptadas a sus necesidades específicas.</p>
     <p className={watch}>Ya sea que esté involucrado en una transacción inmobiliaria compleja, necesite resolver un conflicto relacionado con la propiedad o busque asesoramiento legal en aspectos regulatorios, estoy aquí para ofrecerle la representación legal sólida que necesita. Mi objetivo es brindar un servicio de confianza y lograr resultados favorables para mis clientes en el ámbito del derecho inmobiliario".</p><button onClick={watchMore}>{` ${firstArticulo ? "Menos" : "MAS"}`}</button></h3></li>
    

      <li className="card"> <h3><div className="">  <br /> <span>D</span>ivorcios</div> 
    <p>Mis servicios como abogado de divorcios incluyen la representación de mis clientes en casos de divorcio contencioso o de mutuo acuerdo. Trabajaré estrechamente con usted para comprender sus necesidades, preocupaciones y metas a largo plazo. Desde la división de activos y deudas hasta la custodia de los hijos, la pensión alimenticia y otros asuntos relacionados, estaré a su lado en cada etapa del proceso.</p>
     <p className={watchthree}>Si necesita asistencia en asuntos de herencia, estoy aquí para ayudarle a tomar decisiones informadas y proteger sus derechos. Mi objetivo es proporcionarle una representación legal sólida y un enfoque personalizado para que pueda atravesar este proceso con confianza".
.</p><button onClick={watchThird}>{` ${thirdArticulo ? "Menos" : "MAS"}`}</button></h3></li>

<li className="card"> <h3><div className=""> <br /><span>H</span>ERENCIA </div> 
    <p>Mis servicios como abogado de herencias incluyen asesoramiento en la planificación patrimonial, redacción y revisión de testamentos y documentos de sucesión, representación en casos de sucesiones intestadas (sin testamento), interpretación de cláusulas testamentarias, resolución de disputas entre herederos y distribución de activos.
</p>
     <p className={watchtwo}>Como abogado de derecho tributario, me enorgullece ayudar a mis clientes a navegar por el complejo entorno tributario, brindando soluciones legales efectivas y buscando resultados favorables. Si está buscando asesoramiento profesional en temas fiscales, estoy aquí para ayudarle a lograr una planificación fiscal inteligente y una defensa sólida en caso de disputas tributarias"..</p><button onClick={watchSecond}>{` ${secondArticulo ? "Menos" : "MAS"}`}</button>
     </h3></li>
     
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

<li className=""> <div className="info"><i className="bi bi-house-down"></i> </div> <h6>Direccion</h6><p>Licey al Medio, Santiago De Los Caballeros</p> </li>
<li className="gmail"> <div className="info"><i className="bi bi-envelope-at-fill"></i></div> <h6>Email</h6><p>rosamargaritagutierrezporte
  @gmail.com</p> </li>
<li className="tel"> <div className="info"><i className="bi bi-telephone-fill"></i></div> <h6>Telefono</h6><p>809-970-5004</p><p>809-858-5511</p> </li>
<li className=""> <div className="info"><i className="bi bi-clock"></i></div> <h6>Horario</h6><p>lunes a Viernes <br /> 9:00 am a 5:00 pm</p> </li>

</ul>
</div>

</section>






</main>  )
}

export default Home