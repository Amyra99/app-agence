import { Accueil } from "./Accueil";
import Axios from 'axios'
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import './Nav.css'
import userimg from './user.png'


export function DetailHotel(){
    const{pays,region,nom,stars,prix}=useParams()
    const star=["⭐","⭐","⭐","⭐","⭐"]
    const fullcircles=["🟣","🟣","🟣","🟣","🟣"]
    const emptycircles=["⚪","⚪","⚪","⚪","⚪"]


    const [hotel,sethotel]=useState(nom)
    const [user,setuser]=useState('')
    const [note,setnote]=useState(0)
    const [msg,setmsg]=useState('')

    const addtolist=()=>{
        console.log(user + msg)
        Axios.post("http://localhost:3001/insertCom",{
            hotel:hotel,
            user:user,
            note:note,
            msg:msg
            
        })
        window.location.reload(false);
    }

    const [comments,setcomments]=useState([])
    useEffect(()=>{
        Axios.get("http://localhost:3001/readcomments").then((response)=>{
            console.log(response)
            setcomments(response.data)
        })
    },[])



     return <html> 
      <body >

<div class="bn">
<Accueil/>

 <br></br>
<div class="star" ><h3>{star.slice(5-stars)} </h3>    </div>
<h1>{nom}</h1>
<h4>localisation : {region}</h4>

<br></br> <br></br> <br></br><br></br> 
<div>
    
{comments.filter((item)=>{
return nom.toLowerCase()==item.hotel?item:item.hotel==nom
}).map((c,key)=>{
return <div >
    
<table className="us">
    <tr><td >
    <img  src={userimg} class="av" alt=''/>  <span >{c.user}  


</span></td>
    
     <div class="Acom"><div className="com"><span className="c">{c.msg}</span></div></div>
<td>
    <div className="note"><span>
{fullcircles.slice(5-c.note)}
    {emptycircles.slice(c.note)}</span>
    </div>
</td>

    </tr>
    </table>
    
     </div>
})}
 <div class="space" >
    <input type="text" className="yn" placeholder="username" onChange={(event)=>{setuser(event.target.value)}}/>
    <input placeholder="Ton Commentaire ....."type="text" className="yc"onChange={(event)=>{setmsg(event.target.value)}}/>
 <input type="number" placeholder="Note / 5" className="yn" onChange={(event)=>{setnote(event.target.value)}}/>
<button class="yn " onClick={addtolist}>Comment</button>
 
 </div>

 </div>
 </div>

    </body></html>
}