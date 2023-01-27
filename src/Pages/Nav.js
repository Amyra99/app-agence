
 import './Nav.css'
 import logonav from './logonav.png'
 import logonav2 from './logonav2.jpg'

export function Nav(){

    return <nav class=" navbar-expand-lg  bg">
        <br></br>

   <div class="" >

      <div class="navbar-nav">

        <a class="nav-item ev " href="/home"><b>HOME</b>  </a>
        <a class="nav-item ev " href="/Vols"><b>VOLS</b> </a>

        <a class="nav-item ev  " href="/hotels"><b>HOTELS</b> </a>
        <img src={logonav} height="45px" width="300px" className='imnav'/>

        <a class="nav-item  ev "  exact={true} href="/Croisieres"><b>CROISIERES</b></a>
        <a class="nav-item  ev "  exact={true} href="/weather"><b>METEO</b></a>

        <a class="nav-item  ev "  exact={true} href="/Analyse"><b>FEEDBACK</b></a>

       <div className='log'>  <a class="loga" href="/">Deconnexion </a> </div>
       </div>
      <br></br>

    </div>
  </nav>
}