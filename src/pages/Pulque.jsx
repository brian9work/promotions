import React, { useState } from 'react';
import "../styles/style.css"
import "../styles/loader.css"
import background from '../assets/background.webp';
import header from '../assets/header.png';
import promo from '../assets/promo.png';
import visitanos from '../assets/visitanos.png';
import Button from './components/Button';
import { Machine } from './components/Loaders';
// import axios from 'axios'

const Loading = ({ event }) => {
    return (
        <div className='content-loader'>
            <div className="loader">
                <div>
                    <ul>
                        <li>
                            <svg fill="currentColor" viewBox="0 0 90 120">
                                <path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path>
                            </svg>
                        </li>
                        <li>
                            <svg fill="currentColor" viewBox="0 0 90 120">
                                <path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path>
                            </svg>
                        </li>
                        <li>
                            <svg fill="currentColor" viewBox="0 0 90 120">
                                <path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path>
                            </svg>
                        </li>
                        <li>
                            <svg fill="currentColor" viewBox="0 0 90 120">
                                <path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path>
                            </svg>
                        </li>
                        <li>
                            <svg fill="currentColor" viewBox="0 0 90 120">
                                <path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path>
                            </svg>
                        </li>
                        <li>
                            <svg fill="currentColor" viewBox="0 0 90 120">
                                <path d="M90,0 L90,120 L11,120 C4.92486775,120 0,115.075132 0,109 L0,11 C0,4.92486775 4.92486775,0 11,0 L90,0 Z M71.5,81 L18.5,81 C17.1192881,81 16,82.1192881 16,83.5 C16,84.8254834 17.0315359,85.9100387 18.3356243,85.9946823 L18.5,86 L71.5,86 C72.8807119,86 74,84.8807119 74,83.5 C74,82.1745166 72.9684641,81.0899613 71.6643757,81.0053177 L71.5,81 Z M71.5,57 L18.5,57 C17.1192881,57 16,58.1192881 16,59.5 C16,60.8254834 17.0315359,61.9100387 18.3356243,61.9946823 L18.5,62 L71.5,62 C72.8807119,62 74,60.8807119 74,59.5 C74,58.1192881 72.8807119,57 71.5,57 Z M71.5,33 L18.5,33 C17.1192881,33 16,34.1192881 16,35.5 C16,36.8254834 17.0315359,37.9100387 18.3356243,37.9946823 L18.5,38 L71.5,38 C72.8807119,38 74,36.8807119 74,35.5 C74,34.1192881 72.8807119,33 71.5,33 Z"></path>
                            </svg>
                        </li>
                    </ul>
                </div><span>Loading</span></div>
        </div>
    )
}

const Form = ({ event }) => {
    const [pantalla, setPantalla] = useState(0)
    const exp = {
        email: /[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
        name: /[a-zA-ZÀ-ÿ\s]{1,50}$/,
        phone: /\d{0,12}$/,
        adds: /true|false|1|0$/
    }
    const submit = async (e) => {
        const reserver = localStorage.getItem('reserver')
        console.log(reserver)
        localStorage.setItem('reserver', !reserver ? 0 : parseInt(reserver) + 1);

        const { email, name, phone, adds } = document.getElementById("form")
        const { email: em, name: na, phone: ph, adds: ad } = exp
        if (!em.test(email.value)) { return alert("Por favor escriba un correo valido") }
        if (!na.test(name.value)) { return alert("Por favor escriba un nombre valido") }
        // if (!ph.test(phone.value)) { return alert("Por favor escriba un telefono valido") }
        if (!ad.test(adds.checked)) { return alert("WFT amigo vos estas re loco 🥱😴") }

        e.preventDefault();
        setPantalla(1);
        // event(3)
        // return;
        const Ruta = "https://portafolio.xantheapp.com/api/feria2024/"
        // const Ruta = "http://localhost/promotions/backend/"
        const formData = new FormData();
        formData.append('type', 'post');
        formData.append('email', email.value);
        formData.append('name', name.value);
        formData.append('phone', "asl");
        formData.append('adds', adds.checked);
        formData.append('scan', localStorage.getItem('reserver'));

        await fetch(Ruta, {
            method: 'POST',
            body: formData
        }).then(res => res.json())
            .then(r => {
                r = r[0];
                console.log(r)
                if (r.data) {
                    setPantalla(0)
                    alert('¡Gracias por participar!\nLo redireccionaremos para descargar su codigo')
                    window.open("https://portafolio.xantheapp.com/api/feria2024/reservation.php?c=" + r.code)
                    event(0)
                } else {
                    alert('¡Hubo un error, intenta de nuevo!\n' + r)
                }
            })
            .catch(err => console.log(err))
    }

    const Input = ({ text, type, name, placeholder, maxlength }) => {
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
                    maxLength={maxlength}
                    onChange={(e) => { setValue(e.target.value) }} />
            </div>
        )
    }
    if (!pantalla)
        return (
            <form id='form'>
                <h2>Ya casi terminamos</h2>
                <p>Por favor complete el formulario para verificar que eres un humano</p>
                <Input text="Correo: *" type="email" name="email" placeholder="correo@correo.com" maxlength="40" />
                <Input text="Nombre: *" type="text" name="name" placeholder="Ivan Mendoza" maxlength="50" />
                <Input text="" type="hidden" name="phone" placeholder="123 456 7890" maxlength="12" />

                <p className='mensaje'> * Campos Obligatorios</p>
                <div className="check">
                    <input type="checkbox" name="adds" id="adds" defaultChecked />
                    {/* <label htmlFor="check">Acepto los <a href="#">Terminos y Condiciones</a></label> */}
                    <label htmlFor="adds">Me gustaria recibir notificaciones de futuras promociones de nanacamilpa</label>
                </div>
                <br></br>
                <br></br>
                <Button click={(e) => {
                    submit(e)
                }}>¡Generar Codigo y descargar PDF!</Button>
            </form>
        )
    else return (<Machine />)
}
const Pabellon = ({ event }) => {
    return (
        <>
            <img className='promo' src={visitanos} alt="" />
            <Button
                clase={"secundary"}
                click={() => {
                    window.href = "https://maps.app.goo.gl/V61MSQf5iJdEDZS17"
                    // window.open("")
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
const Promo = ({ event }) => {
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
    const [pantalla, setPantalla] = useState(0);

    const changeScreen = (scr) => {
        setPantalla(scr)
        window.scroll(0, 0)
        // window.href=`${window.location.href}/#header`
    }

    return (
        <div className='container'>
            <div className="content">
                <div className='background'>
                    <img src={background} alt="" id='#header' />
                    <div></div>
                </div>
                <div className="aplication">
                    <img className='header' src={header} alt="" />
                    {
                        pantalla === 0 ? <Promo event={changeScreen} /> :
                            pantalla === 1 ? <Pabellon event={changeScreen} /> :
                                pantalla === 2 ? <Form event={changeScreen} /> :
                                    <Loading event={changeScreen} />
                    }
                    <br /><br /><br /><br /><br />
                    <br /><br /><br /><br /><br />
                </div>
            </div>
        </div>
    );
}


export default Pulque;
