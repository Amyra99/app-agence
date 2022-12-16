
 import './Nav.css'
 import logo from './logo.png'

export function Nav(){

    return <nav class=" navbar-expand-lg  bg">
        <br></br>

   <div class="" >

      <div class="navbar-nav">
 
        <a class="nav-item ev " href="/home"><b>Home</b>  </a>
        <a class="nav-item ev " href="/Vols"><b>VOLS</b> </a>
        <a class="nav-item ev  " href="/hotels"><b>HOTELS</b> </a>
        <a class="nav-item  ev " href="Croisieres"><b>CROISIERES</b></a>
   <a class="nav-item  ev plus" href="/visited"><b>LES PLUS VISITE</b></a>
        
       <div className='log'>  <a class="loga" href="/Login">Deconnexion </a> </div>
       </div>
      <br></br>

    </div>
  </nav>
}