import 'leaflet/dist/leaflet.css';
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css';
import "leaflet-defaulticon-compatibility";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { useState } from 'react';

import Menu from "./components/menu"

import style from "./Contact.module.css"

export const Contact = () => {
    const geoData = ({lat: -25.4249668, lng: -49.2748863})
    const defaultPhoneNumber = '5141999999999'
    const[formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    })
    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData({...formData, [name]: value})
    }
    const handleWhatsAppMessage = () =>{
        const {name, email, message} = formData;
        const urlWhatsApp = `https://api.whatsapp.com/send?phone=${defaultPhoneNumber}&text=
        Name:%20${name}%0D%0A
        Email:%20${email}%0D%0A
        ${message}`;
        window.open(urlWhatsApp, '_blank')
    }
    return(
        <div className={style.wrapContainer}>
            <Menu/>
            <h1>Contact</h1>
            <div className={style.wrapTwoDivs}>
                <div className={style.wrapMap}>
                    <h2>Maps</h2>
                    <MapContainer center={[geoData.lat, geoData.lng ]} zoom={13} scrollWheelZoom={false} style={{width: "100%", height: "100%"}}>
                        <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={[geoData.lat, geoData.lng ]}>
                        <Popup>
                            <a target="_blank" href={`https://www.google.com/maps/place/Sistema+Fiep+-+Unidade+Centro/@${geoData.lat},${geoData.lng},17z/data=!3m1!4b1!4m6!3m5!1s0x94dce41197a84179:0x142fc7abe5169a05!8m2!3d-25.4249717!4d-49.272306!16s%2Fg%2F1ptznr269?entry=ttu`}>Google Maps</a>
                        </Popup>
                        </Marker>
                    </MapContainer>
                </div>
                <div className={style.wrapMessage}>
                    <h2>WhatsApp</h2>
                    <div>
                        <input placeholder='Name' type="text" id="name" name='name' value={formData.name} onChange={handleChange} required />
                    </div>
                    <div>
                        <input placeholder='Email' type="text" id="email" name='email' value={formData.email} onChange={handleChange} required />
                    </div>
                    <div>
                        <textarea placeholder='Message' id="message" name='message' value={formData.message} onChange={handleChange} required></textarea>
                    </div>
                    <div>
                        <button className={style.btn} onClick={handleWhatsAppMessage}>Send Message</button>
                    </div>
                </div>
            </div>
        </div>
    )
}