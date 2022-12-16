 import './NavCSS.css'
 import logo from './logo.png'
 import {BrowserRouter as Router,Routes,Route,NavLink} from 'react-router-dom'; 
  export function Navbar({children}){
    return <html>
   <head>
    <link rel="stylesheet" type="text/css" href="NavCSS.css"></link>

    </head>

<body>
  <div className='main'>
<div className='menu'>
<img id='logo' src={logo} width="275px" height="200px" alt=''/>
<a href='/Hello'>HOME</a>
<a href='/'>Vols</a>
<a href='/Hello'>Hotels</a>
<a href='/Hello'>Croisiére</a>

<a href='/'>Les plus visités</a>
<a href='/'>Contact</a>
 
</div>
<div className='body'>
<main>{children}</main>

</div>
    </div>

</body>



    </html>
}
