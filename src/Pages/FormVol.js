import { useParams } from "react-router-dom";
import { Accueil } from "./Accueil";
import { Link } from "react-router-dom";
import { ReVol } from "./ReVol";
import { useState } from "react";
import './Nav.css'
export function FormVol(){
    const{de,a,ref}=useParams()

 

    const [prenom,setprenom]=useState('--')
    const [name,setnom]=useState('--')
    const [numero,setnumero]=useState('--')
    const [classe,setclasse]=useState('économique')
    const [nombre,setnombre]=useState(1)
 

    return <body>
<form class="bn">
<Accueil/> 

<br></br>
<h3 class="x">Vol de <b>{de}</b> à <b>{a}</b></h3><br></br>

  <div class="form-group wid">
    <label >Prenom :</label>
    <input type="text" required class="form-control bl"  onChange={(event)=>{setprenom(event.target.value)}} /> <br></br>
    <label >Nom :</label>
    <input type="text" required class="form-control bl"  onChange={(event)=>{setnom(event.target.value)}} /><br></br>
    <label >Numero :</label>
    <input type="text" required class="form-control bl" onChange={(event)=>{setnumero(event.target.value)}} /><br></br>
    <label >Email :</label>
    <input type="email" required class="form-control bl" /><br></br>

  </div>
  <div class="form-group wid">
    <label for="exampleFormControlSelect1">Classe :</label>
    <select class="form-control bl" value={classe}  required
    onChange={(event)=>{setclasse(event.target.value)}}>
      <option>économique</option>
      <option>économique premium</option>
      <option>affaires</option>
      <option>La première classe</option>
     </select>
    <br></br><br></br>

 
 <button className="br ">
    <Link class=" cl"to={`/recu/${ref}/${prenom}/${name}/${numero}/${classe}`} >
         Réserver </Link></button>
  </div>
 
  </form>
     </body>
}