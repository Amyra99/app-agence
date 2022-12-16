 import './App.css';
import { Navbar } from './Pages/Navbar';
 import { Accueil } from './Pages/Accueil';
 import { Home } from './Pages/Home';
 import { Vols } from './Pages/Vols';
import { ReVol } from './Pages/ReVol';
import { FormVol } from './Pages/FormVol';
import { DetailHotel } from './Pages/DetailHotel';
import { Formhotel } from './Pages/Formhotel';
   import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'; 
import { Hotels } from './Pages/Hotels';
 import { Rehotel } from './Pages/Rehotel';
 import {Croisiere} from './Pages/Croisiere';
 import {DetailCrois} from  './Pages/DetailCrois'
  function App() {
  return (
    
    <div className="App">



<Router>
   <Routes>
   

   <Route path='/Formulaire/:de/:a/:ref' element={<FormVol/>}/> 
   <Route path='/Details-croisiere/:depart/:date/:escale1/:escale2/:escale3/:escale4/:escale5/:escale6/:prix' element={<DetailCrois/>}/> 

     <Route path='/nav' element={<Navbar/>}/> 
     
    <Route path='/' element={<Accueil/>}/> 
    <Route path='/vols' element={<Vols/>}/> 
    <Route path='/hotels' element={<Hotels/>}/> 

    <Route path='/home' element={<Home/>}/> 
    <Route path='/recu/:ref/:prenom/:name/:numero/:classe' element={<ReVol/>}/> 
    <Route path='/details/:pays/:region/:nom/:stars/:prix' element={<DetailHotel/>}/> 
    <Route path='/Reserver/:region/:Nom/:prix/:Stars' element={<Formhotel/>}/> 
    <Route path='/Reservation/:Nom/:prenom/:name/:numero/:de/:a/:nombre/:Chambre/:prix' element={<Rehotel/>}/> 
    <Route path='/Croisieres' element={<Croisiere/>}/> 

      </Routes> 
 
    </Router>
 
     </div>
  );
}

export default App;
