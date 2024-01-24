import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom'
import background from '../assets/background.webp';
import header from '../assets/header.png';
import promo from '../assets/promo.png';
import visitanos from '../assets/visitanos.png';
import Button from './components/Button';
import {Book, Machine,MachineError} from './components/Loaders';

const ReceivedCode = ({ input }) => {
   const { code } = useParams();
   const [change, setChange] = useState("2")

   const updatePromo = async () => {
      try {
         const formData = new FormData();
         formData.append('type', 'put');
         formData.append('code', code);
         await fetch("https://portafolio.xantheapp.com/api/feria2024/", {
            // await fetch("http://localhost/promotions/backend/", {
            method: 'POST',
            body: formData
         }).then(res => res.text())
            .then(r => {
               console.log(r)
               if(r=="1") setChange("1")
               else if(r=="2") setChange("2")
               else {
                  alert("Error");
                  console.log(r)
               }
               // setChange("1")
            })
            .catch(err => console.log(err));
      } catch (error) {
         console.log(error)
      }
   }
   useEffect(() => {
      updatePromo();
   }, [])
   return (
      <div className='container'>
         <div className="content">
            <div className='background'>
               <img src={background} alt="" id='#header' />
               <div></div>
            </div>
            <div className="aplication">
               <img className='header' src={header} alt="" />
               {change=="1" ?
                  <Book>
                     Codigo {code} Guardado
                  </Book>
                  : change=="0" ?
                  <Machine>
                     Guardando codigo {code}
                  </Machine>
                  :
                  <MachineError>
                     El codigo {code} ya ha sido usado
                  </MachineError>
               }
            </div>
         </div>
      </div>
   );
}
const ReseivedInput = ({ }) => {
   const [value, setValue] = useState("")
   return (
      <div className='container'>
         <div className="content">
            <div className='background'>
               <img src={background} alt="" id='#header' />
               <div></div>
            </div>
            <div className="aplication">
               <img className='header' src={header} alt="" />
               <form action="">
                  <input 
                     type="text" 
                     placeholder='Codigo' 
                     onChange={(e) => { setValue(e.target.value) }}
                     id='code'
                     />
                  <Link to={`/received/${value}`} className='button' style={{
                     textDecoration:"none",
                     textAlign:"center",
                     color: "#000",
                     }}>
                  Guardar
                  </Link>
               </form>
            </div>
         </div>
      </div>
   );
}

export { ReseivedInput, ReceivedCode };
