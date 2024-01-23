import React, { useState } from 'react';
import "../styles/style.css"
import background from '../assets/background.png';
import header from '../assets/header.png';
import promo from '../assets/promo.png';
import visitanos from '../assets/visitanos.png';
import Button from './components/Button';


const Form = ({event})=>{
    const Input = ({text,type,name,placeholder})=>{
        const [value, setValue] = useState('');
        return (
            <div className='input'>
                <label htmlFor={name}>{text}</label>
                <input 
                    type={type} 
                    value={value} 
                    placeholder={placeholder}
                    id={name} 
                    name={name} 
                    onChange={(e)=>{setValue(e.target.value)}} />
            </div>
        )
    }
    return (
        <form>
            <h2>Ya casi terminamos</h2>
            <p>Por favor complete el formulario para verificar que eres un humano</p>
            <Input text="Correo: *" type="email" name="email" placeholder="correo@correo.com" />
            <Input text="Nombre: *" type="text" name="name" placeholder="Ivan Mendoza" />
            <Input text="Telefono: " type="tel" name="phone" placeholder="123 456 7890" />

            <p className='mensaje'> * Campos Obligatorios</p>
            <div className="check">
                <input type="checkbox" name="check" id="check" defaultChecked />
                {/* <label htmlFor="check">Acepto los <a href="#">Terminos y Condiciones</a></label> */}
                <label htmlFor="check">Me gustaria recibir notificaciones de futuras promociones de nanacamilpa</label>
            </div>
            <br></br>
            <br></br>
            <Button click={() => { alert('¡Gracias por participar!') }}>¡Generar Codigo y descargar PDF!</Button> 
        </form>
    )
}
const Pabellon = ({event})=>{
    return (
        <>
            <img className='promo' src={visitanos} alt="" />
            <Button 
                clase={"secundary"}
                click={() => { 
                    window.open("https://maps.app.goo.gl/V61MSQf5iJdEDZS17")
                    // alert('¡Gracias por participar!')
                }}>
                ¡Ver Ubicacion!
            </Button>
            <Button 
                click={() => { 
                    event(2)
                }}>
                ¡Quiero Participar!
            </Button>
            <Button 
                clase={"tertiary"}
                click={() => { 
                   window.open(visitanos)
                }}>
                Descargar Imagen
            </Button>
        </>
    )
}
const Promo = ({event})=>{
    return (
        <>
            <img className='promo' src={promo} alt="" />
            <Button 
                click={() => { 
                    event(1)
                }}>
                ¡Quiero Participar!
            </Button>
        </>
    )
}

const Pulque = () => {
    const [pantalla, setScreen] = useState(0);

    return (
        <div className='container'>
            <div className="content">
                <div className='background'>
                    <img src={background} alt="" />
                    <div></div>
                </div>
                <div className="aplication">
                    <img className='header' src={header} alt="" />
                    {
                        pantalla===0 ?  <Promo event={setScreen} /> :
                        pantalla===1 ?  <Pabellon event={setScreen} /> :
                        <Form event={setScreen} />
                    }
                    <br/><br/><br/><br/><br/>
                    <br/><br/><br/><br/><br/>
                    {/* <Promo /> */}
                    {/* <Pabellon /> */}
                    {/* <Form /> */}
                    
                    {/* <img className='promo' src={promo} alt="" />
                    <Button click={() => { alert('¡Gracias por participar!') }}>¡Quiero Participar!</Button> */}
                </div>
            </div>
        </div>
    );
}


export default Pulque;
