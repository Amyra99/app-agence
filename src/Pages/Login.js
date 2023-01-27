import React from 'react';
import './Logincss.css';
import login from './log.png';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export function Login(){

    const [username,setusername]=useState('')
    const [password,setpsw]=useState('')
    const [valide,setvalide]=useState(false)
var action;
if (valide==true){
    action="/home"
}else{action="/"}


    return <html lang="en">
    <head>
      <meta charset="UTF-8" />
      <title>Sign in</title>
    </head>
    <body>
      <div class="container">
        <div class="forms-container">
          <div class="signin-signup">

            <form  action="/home" class="sign-in-form">

              <h2 class="title">Sign in</h2>
              <div class="input-field">
                 <input type="text" placeholder="Username" onChange={(event)=>{setusername(event.target.value)}} />
              </div>
              <div class="input-field">
                 <input type="password" placeholder="Password" onChange={(event)=>{setpsw(event.target.value)}} />
              </div>
                <button  onClick={()=>{if (this.username=="user" )
            { valide=true}
            }} class="btn10"> LOGIN </button>
        
               </form>
          </div>
        </div>
  
        <div class="panels-container">
          <div class="panel left-panel">
            <div class="content">

                <img src={login} height="500px" width="600px"/>

            </div>
            <img src="img/log.svg" class="image" alt="" />
          </div>
          </div>
      </div>
  
     </body>
  </html>
}
